/**
 *  tbjscheduling  <sesparza>
 */

(function() {
    'use strict';

    angular
        .module('widget-calendar')
        .directive('tbjScheduling', tbjschedulingDirective);

    tbjschedulingDirective.$inject = ['directivesRoute', 'templateService', 'uiCalendarConfig', 'configService', 'ModalService', '$uibModal', 'scheduleWidgetService', 'templatesRoute', '$compile', 'messageWidgetService'];
    function tbjschedulingDirective(directivesRoute, templateService, uiCalendarConfig, configService, ModalService, $uibModal, scheduleWidgetService, templatesRoute, $compile, messageWidgetService) {
        return {
            restrict: 'AE',
            template: templateService.get(directivesRoute + 'tbjscheduling/tbjschedulingView.html'),
            replace: true,
            scope: {
                config: '=',
                offer: '=',
                applicants: '='
            },
            link: function(scope, element, attrs) {
                //Se inicializa el widget
                scope.config = scope.config || {};
                scope.config.services = scope.config.services || {};

                //Heredo servicios del portal padre o utilizo los del widget
                var SERVICE = {
                    schedule: scope.config.services.schedule || scheduleWidgetService,
                    catalog: scope.config.services.catalog || {},
                    message: scope.config.services.message || messageWidgetService
                };

                init(scope.offer);



                /////////////////////////////
                function init(offer){
                    SERVICE.schedule.getAppointments(offer.id).then(function(result){
                        var events = (result && result.data)? result.data : [];
                        scope.uiConfig = {
                            calendar:{
                                monthNames:['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio',
                                    'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
                                ],
                                dayNamesShort : ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
                                height: 450,
                                editable: true,
                                timezone: "local",
                                header:{
                                  left: 'today',
                                  center: 'title',
                                  right: 'prev,next'
                                },
                                defaultView: 'month',
                                selectable: true,
                                selectHelper: true,
                                events : events,
                                dayClick: onDayClick,
                                eventClick: alertEventOnClick,
                                //eventDrop: alertOnDrop,
                                //eventResize: alertOnResize,
                                //eventMouseover:eventMouseover,
                                //eventMouseout:eventMouseout,
                                eventRender: eventRender
                            }
                        };
                    }, function(err){
                        console.log('ERR', err);
                    });
                }

                //EDITAR EVENTO
                function alertEventOnClick(event, jsEvent, view){
                    var modalInstance = $uibModal.open({
                      animation: true,
                      templateUrl: templatesRoute + 'event.html',
                      controller: 'eventController',
                      controllerAs: 'event',
                      scope: scope,
                      size: 'md',
                      resolve: {
                        event: function(){
                            return event;
                        }
                      }
                    });

                    modalInstance.result.then(function(event, remove){
                        if (!remove) {
                            SERVICE.schedule.edit(event.data).then(function(result){
                                SERVICE.message.show('success', 'Evento editado con éxito');
                            }, function(err){
                                SERVICE.message.show('error', 'Problemas al editar');
                            });
                        } else {
                            SERVICE.schedule.remove(event.data).then(function(result){
                                SERVICE.message.show('success', 'Evento eliminado con éxito');
                            }, function(err){
                                SERVICE.message.show('error', 'Problemas al eliminar');
                            });
                        }
                    }); 
                };

                //NUEVO EVENTO
                function onDayClick(date, allDay, jsEvent){
                    scope.offer = scope.offer || {};
                    var today = moment();
                    var diff = date.diff(today, 'days');
                    if (diff >= 0) {
                        var event = {
                            start: moment(date),
                            data: {
                                jobtitle: scope.offer.title || '',
                                applicants: scope.applicants || []
                            }
                        };

                        var modalInstance = $uibModal.open({
                          animation: true,
                          templateUrl: templatesRoute + 'event.html',
                          controller: 'eventController',
                          controllerAs: 'event',
                          scope: scope,
                          size: 'md',
                          resolve: {
                            event: function(){
                                return event;
                            }
                          }
                        });
                        modalInstance.result.then(function (event) {
                            SERVICE.schedule.create(event.data).then(function(result){
                                SERVICE.message.show('success', 'Evento creado con éxito');
                            }, function(err){
                                SERVICE.message.show('error', 'Problemas al crear evento');
                            });
                        });   
                    } else {
                        //
                    }
                };



                function addEditEvent(index) {  /// *** agrega o edita un evento *** ///
                        scope.modalBody = "¿Confirma los datos ingresados?";
                        scope.modalTitle = "Confirmar";
                        if (!eventClick){
                            modal(0, 'newEvent');            
                        }else{//modo edicion
                            modal(index, 'editEvent');
                        } 
                };

                function eventRender( event, element, view ) { 
                    console.log('event.title',event.title)
                    element.attr({
                        'tooltip': event.title,
                        'tooltip-append-to-body': true
                    });
                    $compile(element)(scope);
                }

                function addEvent () {
                    /*scope.config.push({
                        title: 'Sujeto A',
                        start:scope.fecha+" "+scope.hora,// scope.fecha.toJSON(),
                        color:col,
                        timezone:'America/Santiago',
                        lugar:scope.lugar,
                        entrevistador:scope.entrevistador,
                        cargo:scope.cargo,
                        obs:scope.obs,
                        notificacion:scope.notificar,
                        estado:0//0=en espera, 1=aprobado
                    }); */   
                };

                /*function editEvent(index){
                    var indexConfig = findIndexByKeyValue(scope.config, "id", index);
                    scope.config[indexConfig].start=scope.fecha+" "+scope.hora;
                    scope.config[indexConfig].color=col;
                    scope.config[indexConfig].lugar=scope.lugar;
                    scope.config[indexConfig].entrevistador=scope.entrevistador;
                    scope.config[indexConfig].obs=scope.obs;
                    scope.config[indexConfig].cargo=scope.cargo;
                    scope.config[indexConfig].notificacion=scope.notificar;
                    scope.config[indexConfig].estado=0;
                };

                function modal(index, type){
                    switch(type){
                        case 'delete':
                            scope.okEvent = deleteEvent;
                            break;
                        case 'newEvent':
                            scope.okEvent = addEvent;
                            break;
                        case 'editEvent':
                            scope.okEvent = editEvent;
                            break;
                        case 'onDrop':
                            scope.okEvent = dropEditEvent;    
                    }

                    var modalInstance = $uibModal.open({
                      animation: true,
                      templateUrl: templatesRoute + 'event.html',
                      controller: 'EventController',
                      scope: scope,
                      size: 'lg',
                      resolve: {
                        eventId: function(){
                            return index;
                        }
                      }
                    });
                    modalInstance.result.then(function (id) {//entra cuando se le da ok al modal
                        scope.okEvent(id);
                        clean(); 
                    }); 
                };*/

                /*function remove(index) {
                    scope.modalBody = "¿Eliminar este evento?";
                    scope.modalTitle = "Eliminar evento.";
                    modal(index, 'delete');
                };

                function deleteEvent(id){ 
                    var indexConfig = findIndexByKeyValue(scope.config, "id", id);
                    scope.config.splice(indexConfig,1);
                    clean();
                    scope.upbar=false;
                };

                function dropEditEvent(id){
                    var indexConfig = findIndexByKeyValue(scope.config, "id",id);
                    scope.config[indexConfig].start=scope.newDate;
                    scope.config[indexConfig].color=col;
                    scope.config[indexConfig].estado=0;
                };

                function clean(){ 
                    scope.hora=moment().format('HH:mm');
                    scope.lugar = "" ;  
                    scope.entrevistador = "" ;  
                    scope.cargo = "" ;  
                    scope.obs = "" ;  
                    scope.notificar = false ;  
                    scope.upbar=false;
                    eventClick=false; 
                };

                

                function findIndexByKeyValue(arraytosearch, key, valuetosearch) { 
                    var estado =null;
                    for (var i = 0; i < arraytosearch.length; i++) {
                        if (arraytosearch[i][key] == valuetosearch) {
                          estado = i;
                        }
                    }
                    return estado;
                };

                function alertOnDrop(event, delta, revertFunc, jsEvent, ui, view){
                    scope.newDate=moment(event._start._d).format('YYYY-MM-DD HH:mm');
                    scope.modalBody = "Se modificará la fecha del evento, ¿continuar?";
                    scope.modalTitle = "Modificar Evento";
                    modal(event.id,"onDrop");
                };
                */

                function eventMouseover (event, jsEvent, view) { /// *** paso del mouse "entra" en un evento *** ///
                    console.log('eventMouseover', event);
                    /*if (!eventClick){
                        scope.info = false;
                        scope.fecha  = calEvent._start._i;
                        scope.lugar = calEvent.lugar ;  
                        scope.entrevistador = calEvent.entrevistador ;  
                        scope.cargo = calEvent.cargo ;  
                        scope.obs = calEvent.obs ;  
                        scope.notificar = calEvent.notificacion ;               
                    }*/
                 };

                function eventMouseout (event, jsEvent, view) { /// *** paso del mouse "sale" un evento *** ///
                    console.log('eventMouseout', event);
                    /*if (!eventClick){
                        scope.info = true;
                        if (fechaClick==""){
                            scope.fecha  = moment().format('YYYY-MM-DD');
                        }else{
                            scope.fecha  = fechaClick;
                        }
                        scope.hora=moment().format('HH:mm');
                        scope.lugar = "" ;  
                        scope.entrevistador = "" ;  
                        scope.cargo = "" ;  
                        scope.obs = "";  
                        scope.notificar = false ;
                    }*/
                };  
                
            }
        };
    }
})();

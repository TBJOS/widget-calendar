/**
 *  tbjscheduling  <sesparza>
 */

(function() {
    'use strict';

    angular
        .module('widget-calendar')
        //.filter('date',tbjschedulingFilter)
        .directive('tbjScheduling', tbjschedulingDirective);

    tbjschedulingDirective.$inject = ['directivesRoute', 'templateService', 'uiCalendarConfig', 'configService', 'ModalService', '$uibModal'];
    function tbjschedulingDirective(directivesRoute, templateService, uiCalendarConfig, configService, ModalService, $uibModal) {
        return {
            restrict: 'AE',
            template: templateService.get(directivesRoute + 'tbjscheduling/tbjschedulingView.html'),
            replace: true,
            scope: false,
            link: function(scope, element, attrs) {
                var date = new Date();
                var mi = date.getMinutes();
                var h = date.getHours();
                var d = date.getDate();
                var m = date.getMonth()+1;
                var y = date.getFullYear();
                var col = '#31b0d5';
                var fechaClick="";
                var eventClick=false;
                scope.id="";
                scope.fecha=moment().format('YYYY-MM-DD');
                scope.hora=moment().format('HH:mm');
                scope.lugar = "" ;  
                scope.entrevistador = "" ;  
                scope.cargo = "" ;  
                scope.obs = "" ;  
                scope.notificar = false ;  
                scope.events = [];
                scope.info = true;
                scope.upbar = false;
                scope.eventSources=[];
                scope.addEditEvent = addEditEvent;
                scope.remove = remove;
                scope.modalBody = "¿Eliminar este evento?";
                scope.modalTitle = "Eliminar evento.";
                scope.clean = clean;
                scope.onDayClick = onDayClick; 
                scope.alertEventOnClick = alertEventOnClick;
                scope.eventRender = eventRender;
                scope.eventMouseover = eventMouseover;
                scope.eventMouseout = eventMouseout;
                scope.deleteEvent = deleteEvent;
                scope.config = false;
                init();
                /////////////////////////////
                function addEditEvent(index) {  /// *** agrega o edita un evento *** ///
                    if (!eventClick){
                        scope.config.push({
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
                        });                    
                    }else{//modo edicion
                        var indexConfig = findIndexByKeyValue(scope.config, "id", index);
                        scope.config[indexConfig].start=scope.fecha+" "+scope.hora;
                        scope.config[indexConfig].color=col;
                        scope.config[indexConfig].lugar=scope.lugar;
                        scope.config[indexConfig].entrevistador=scope.entrevistador;
                        scope.config[indexConfig].obs=scope.obs;
                        scope.config[indexConfig].notificacion=scope.notificar;
                        scope.config[indexConfig].estado=0;
                    } 
                    clean(); 
                };

                function remove(index) { /// *** show modal *** ///
                    var modalInstance = $uibModal.open({

                      animation: true,
                      templateUrl: directivesRoute + 'tbjscheduling/modal.html',
                      controller: 'calendarController',
                      scope: scope,
                      size: 'sm',
                      resolve: {
                        eventId: function(){
                            return index;
                        }
                      }
                    });
                    modalInstance.result.then(function (id) {
                      deleteEvent(id);
                    }); 
                }

                function deleteEvent(id){ /// *** elimina un evento *** ///
                    var indexConfig = findIndexByKeyValue(scope.config, "id", id);
                    scope.config.splice(indexConfig,1);
                    clean();
                    scope.upbar=false;
                }


                function clean(){ /// *** limpia el formulario de eventos *** ///
                    scope.hora=moment().format('HH:mm');
                    scope.lugar = "" ;  
                    scope.entrevistador = "" ;  
                    scope.cargo = "" ;  
                    scope.obs = "" ;  
                    scope.notificar = false ;  
                    scope.upbar=false;
                    eventClick=false; 
                }
                function onDayClick(dates, allDay, jsEvent){ /// *** click en una fecha en el calendario *** ///
                    scope.fecha=dates.format();
                    fechaClick=scope.fecha;
                };
                function alertOnDrop(event, dayDelta, minuteDelta, allDay, revertFunc, jsEvent, ui, view){
                }
                function findIndexByKeyValue(arraytosearch, key, valuetosearch) { /// *** busca el indice del arreglo de un objeto basado en un id del objeto *** ///
                    var estado =null;
                    for (var i = 0; i < arraytosearch.length; i++) {
                        if (arraytosearch[i][key] == valuetosearch) {
                          estado = i;
                        }
                    }
                    return estado;
                }
                function alertEventOnClick(calEvent, jsEvent, view){ /// *** click en un evento *** ///
                    scope.upbar=true;
                    scope.id=calEvent.id;
                    eventClick=true;
                    scope.info = true;
                    var aux=calEvent.start._i;
                    var fulldate=aux.split(" ");
                    scope.fecha  = fulldate[0];
                    scope.hora  = fulldate[1]
                    scope.lugar = calEvent.lugar ;  
                    scope.entrevistador = calEvent.entrevistador ;  
                    scope.cargo = calEvent.cargo ;  
                    scope.obs = calEvent.obs ;  
                    scope.notificar = calEvent.notificacion ;
                };
                function eventRender( event, element, view ) {
                };
                function eventMouseover (calEvent, jsEvent, view) { /// *** paso del mouse "entra" en un evento *** ///
                    if (!eventClick){
                        scope.info = false;
                        scope.fecha  = calEvent._start._i;
                        scope.lugar = calEvent.lugar ;  
                        scope.entrevistador = calEvent.entrevistador ;  
                        scope.cargo = calEvent.cargo ;  
                        scope.obs = calEvent.obs ;  
                        scope.notificar = calEvent.notificacion ;               
                    }
                 };
                function eventMouseout (event, jsEvent, view) { /// *** paso del mouse "sale" un evento *** ///
                    if (!eventClick){
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
                    }
                  };  
                function init(){
                    configService.get(function(config){  /// *** trae los eventos para cargarlos *** ///
                        scope.config = config;
                        if (config.length > 0){
                            scope.uiConfig = {
                                calendar:{
                                    monthNames:['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio',
                                        'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
                                    ],
                                    dayNamesShort : ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
                                    height: 450,
                                    editable: false,
                                    timezone: "local",
                                    header:{
                                      left: 'today',
                                      center: 'title',
                                      right: 'prev,next'
                                    },
                                    defaultView: 'month',
                                    selectable: true,
                                    selectHelper: true,
                                    events : scope.config, 
                                    dayClick: scope.onDayClick,
                                    eventClick: scope.alertEventOnClick,
                                    eventDrop: scope.alertOnDrop,
                                    eventResize: scope.alertOnResize,
                                    eventRender: scope.eventRender,
                                    eventMouseover:scope.eventMouseover,
                                    eventMouseout:scope.eventMouseout
                                }
                            };
                        }else{console.log("no data!")} 
                    });
                }
            }
        };
    }
})();

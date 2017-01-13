/**
 *  tbjscheduling  <sesparza>
 */

(function() {
    'use strict';

    angular
        .module('widget-calendar')
        .directive('tbjScheduling', tbjschedulingDirective);

    tbjschedulingDirective.$inject = ['directivesRoute', 'templateService', 'uiCalendarConfig', 'configService', '$uibModal', 'scheduleWidgetService', 'templatesRoute', '$compile', 'messageWidgetService', 'timeZone'];
    function tbjschedulingDirective(directivesRoute, templateService, uiCalendarConfig, configService, $uibModal, scheduleWidgetService, templatesRoute, $compile, messageWidgetService, timeZone) {
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

                    var config = {
                        calendar:{
                            monthNames:['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio',
                                'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
                            ],
                            dayNamesShort : ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
                            height: 450,
                            editable: true,
                            timezone: timeZone,
                            header:{
                              left: 'today',
                              center: 'title',
                              right: 'prev,next'
                            },
                            defaultView: 'month',
                            selectable: false,
                            selectHelper: true,
                            events : [],
                            dayClick: onDayClick,
                            eventClick: eventOnClick,
                            //eventDrop: alertOnDrop,
                            //eventResize: alertOnResize,
                            eventMouseover:eventMouseover,
                            //eventMouseout:eventMouseout,
                            eventRender: eventRender
                        },
                        loaded: true //Flag de uso interno para cargar el calendar
                    };

                    SERVICE.schedule.getAppointments(offer.id).then(function(appointments){
                        var events = appointments || [];
                        config.calendar.events = events;
                        scope.uiConfig = config;
                    }, function(err){
                        console.log('ERR', err);
                        scope.uiConfig = config;
                    });
                }

                //EDITAR EVENTO
                function eventOnClick(event, jsEvent, view){
                    console.log('event', event)
                    event.jobId = scope.offer.id;
                    event.title = scope.offer.description.jobTitle || '';
                    event._saveMethod = SERVICE.schedule.edit;
                    event._getMethod = SERVICE.schedule.get;
                    event._removeMethod = null;
                    var modalInstance = $uibModal.open({
                      animation: true,
                      template: templateService.get(templatesRoute + 'event.html'),
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

                    modalInstance.result.then(function(result){
                       //Actualizar todos los eventos
                        init(scope.offer);
                    }); 
                };

                //NUEVO EVENTO
                function onDayClick(clickedDate, allDay, jsEvent){
                    console.log('offer', scope.offer);
                    var date = new Date(clickedDate);
                    scope.applicants = scope.applicants || [];
                    var date = moment(date).add(1, 'days')
                    date.hour(0);
                    date.minute(0);

                    scope.offer = scope.offer || {};
                    var today = moment();
                    today.hour = 0;
                    today.minute = 0;

                    var diff = date.diff(today, 'hours');
                    if (diff >= 0 && scope.applicants.length > 0) {
                        var event = {
                            _id: 0,
                            jobId: scope.offer.id,
                            start: moment(date),
                            title: scope.offer.description.jobTitle || '',
                            applicants: scope.applicants,
                            _saveMethod: SERVICE.schedule.create,
                            _getMethod: null,
                            _removeMethod: null
                        };
                        
                        var modalInstance = $uibModal.open({
                          animation: true,
                          template: templateService.get(templatesRoute + 'event.html'),
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

                        modalInstance.result.then(function (result) {
                            if (result) scope.applicants = [];
                            //Actualizar todos los eventos
                            init(scope.offer);
                        });   
                    } else {
                        //
                    }
                };

                function eventMouseover (event, jsEvent, view) {
                    scope.selectedEvent = event;
                };                

                function eventRender( event, element, view ) {
                    element.attr({
                        'tooltip': event.title,
                        'tooltip-append-to-body': true,//false, //Corregir bug - queda pegado en algun lugar de la pantalla
                        'uib-tooltip-template': "'tooltipTemplate.html'"
                    });
                    $compile(element)(scope);
                }
                

                function eventMouseout (event, jsEvent, view) { /// *** paso del mouse 'sale' un evento *** ///
                    //console.log('eventMouseout', event);
                };  
                
            }
        };
    }
})();

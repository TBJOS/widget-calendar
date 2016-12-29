/**
 *  tbjscheduling  <sesparza>
 */

(function() {
    'use strict';

    angular
        .module('widget-calendar')
        .directive('tbjScheduling', tbjschedulingDirective);

    tbjschedulingDirective.$inject = ['directivesRoute', 'templateService', 'uiCalendarConfig', 'configService', 'ModalService', '$uibModal', 'scheduleWidgetService', 'templatesRoute', '$compile', 'messageWidgetService', 'timeZone'];
    function tbjschedulingDirective(directivesRoute, templateService, uiCalendarConfig, configService, ModalService, $uibModal, scheduleWidgetService, templatesRoute, $compile, messageWidgetService, timeZone) {
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
                    SERVICE.schedule.getAppointments(offer.id).then(function(appointments){
                        var events = appointments || [];
                        scope.uiConfig = {
                            calendar:{
                                monthNames:['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio',
                                    'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
                                ],
                                dayNamesShort : ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
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
                                events : events,
                                dayClick: onDayClick,
                                eventClick: eventOnClick,
                                //eventDrop: alertOnDrop,
                                //eventResize: alertOnResize,
                                eventMouseover:eventMouseover,
                                //eventMouseout:eventMouseout,
                                eventRender: eventRender
                            }
                        };
                    }, function(err){
                        console.log('ERR', err);
                    });
                }

                //EDITAR EVENTO
                function eventOnClick(event, jsEvent, view){
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

                    modalInstance.result.then(function(result){
                       //Actualizar todos los eventos
                        init(scope.offer);
                    }); 
                };

                //NUEVO EVENTO
                function onDayClick(date, allDay, jsEvent){
                    date = moment(date).add(1, 'days').set({
                        hour: 0,
                        minute: 0
                    });

                    scope.offer = scope.offer || {};
                    var today = moment().set({
                        hour:0, minute: 0
                    });

                    var diff = date.diff(today, 'hours');
                    if (diff >= 0) {
                        var event = {
                            id: 0,
                            start: moment(date),
                            title: scope.offer.title || '',
                            applicants: scope.applicants || [],
                            _saveMethod: SERVICE.schedule.create,
                            _getMethod: null,
                            _removeMethod: null
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
                        modalInstance.result.then(function (result) {
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
                        'tooltip-append-to-body': true,
                        'uib-tooltip-template': "'tooltipTemplate.html'"
                    });
                    $compile(element)(scope);
                }
                

                function eventMouseout (event, jsEvent, view) { /// *** paso del mouse "sale" un evento *** ///
                    //console.log('eventMouseout', event);
                };  
                
            }
        };
    }
})();

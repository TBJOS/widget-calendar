if(typeof TEMPLATES === 'undefined') {var TEMPLATES = {};}
TEMPLATES['app/templates/event.html'] = "<div class=\"newEvent\">\n" +
    "\n" +
    "	<div class=\"modal-header\">\n" +
    "		 <button\n" +
    "		 	type=\"button\"\n" +
    "		 	ng-click=\"event.close()\"\n" +
    "		 	class=\"close\"\n" +
    "		 	data-dismiss=\"modal\"\n" +
    "		 	aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span>\n" +
    "		 </button>\n" +
    "	    <h3 class=\"modal-title\">{{(event.data.token && event.diff)? 'Nueva cita' : 'Cita'}} - {{event.data.date | date: 'dd-MM-yyyy'}}</h3>\n" +
    "	    <button\n" +
    "	    	ng-if =\"event.data.token && event.diff\"\n" +
    "	    	type=\"button\"\n" +
    "	    	class=\"pull-right btn btn-danger\"\n" +
    "	    	ng-click=\"event.removeEvent()\">Anular Cita\n" +
    "	    </button>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"modal-body\">\n" +
    "		<div class=\"container-fluid\">\n" +
    "			<h4>Entrevista para el Cargo</h4>\n" +
    "			<h4><strong>{{event.data.jobtitle}}</strong></h4>\n" +
    "			<form  class=\"form-horizontal\" role=\"form\">\n" +
    "				<div class=\"form-group\" ng-if=\"event.diff\">\n" +
    "					<div class=\"col-xs-4\">\n" +
    "						<label for=\"\" class=\"control-label\">Hora inicio</label>\n" +
    "						<div\n" +
    "							uib-timepicker\n" +
    "							ng-model=\"event.data.start\"\n" +
    "							hour-step=\"1\"\n" +
    "							minute-step=\"1\"\n" +
    "							show-meridian=\"false\">\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"col-xs-4\">\n" +
    "						<label for=\"\" class=\"control-label\">Hora término</label>\n" +
    "						<div\n" +
    "							uib-timepicker\n" +
    "							ng-model=\"event.data.end\"\n" +
    "							hour-step=\"1\"\n" +
    "							minute-step=\"1\"\n" +
    "							show-meridian=\"false\">\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"form-group\" ng-if=\"!event.diff\">\n" +
    "					<div class=\"col-xs-4\">\n" +
    "						<label for=\"\" class=\"control-label\">Hora inicio {{event.data.start.format('HH:mm')}}</label>\n" +
    "					</div>\n" +
    "					<div class=\"col-xs-4\">\n" +
    "						<label for=\"\" class=\"control-label\">Hora término {{event.data.end.format('HH:mm')}}</label>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"form-group\">\n" +
    "				    <div class=\"row-fluid\">\n" +
    "					    <div class=\"col-xs-6\">\n" +
    "					      <label for=\"\" class=\"control-label\">Entrevistador</label>\n" +
    "					      <input\n" +
    "						      type=\"text\"\n" +
    "						      ng-model=\"event.data.interviewer\"\n" +
    "						      class=\"form-control\"\n" +
    "						      id=\"\"\n" +
    "						      ng-disabled=\"!event.diff\">\n" +
    "					    </div>\n" +
    "					    <div class=\"col-xs-6\">\n" +
    "					      <label for=\"\" class=\"control-label\">Email</label>\n" +
    "					      <input\n" +
    "					      	type=\"email\"\n" +
    "					      	ng-model=\"event.data.interviewerEmail\"\n" +
    "					      	class=\"form-control\"\n" +
    "					      	id=\"\"\n" +
    "					      	ng-disabled=\"!event.diff\">\n" +
    "					    </div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"form-group\">\n" +
    "					<div class=\"checkbox\">\n" +
    "					    <label>\n" +
    "					      <input\n" +
    "					      	ng-model=\"event.data.sendBackupMail\"\n" +
    "					      	type=\"checkbox\"\n" +
    "					      	ng-disabled=\"!event.diff\"> Enviar correo de respaldo al entrevistador\n" +
    "					    </label>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<hr>\n" +
    "				<div class=\"form-group\">\n" +
    "				    <label for=\"\" class=\"control-label\">Quienes asisten</label>\n" +
    "				    <p></p>\n" +
    "				    <p>Jorge Vergara <a href=\"\">Ver curriculum</a></p>\n" +
    "				    <p>Tatiana Lobos <a href=\"\">Ver curriculum</a></p>\n" +
    "				</div>\n" +
    "				<hr>\n" +
    "				<div class=\"form-group\">\n" +
    "				    <label for=\"\" class=\"col-xs-3 control-label\">Lugar</label>\n" +
    "				    <div class=\"col-xs-9\">\n" +
    "				      <input\n" +
    "				      	type=\"text\"\n" +
    "				      	ng-model=\"event.data.locationInterview\"\n" +
    "				      	class=\"form-control\"\n" +
    "				      	id=\"\"\n" +
    "				      	ng-disabled=\"!event.diff\">\n" +
    "				    </div>\n" +
    "				</div>\n" +
    "				<div class=\"form-group\">\n" +
    "				    <label for=\"\" class=\"col-xs-3 control-label\">Comentario para el candidato (opcional)</label>\n" +
    "				    <div class=\"col-xs-9\">\n" +
    "				      <textarea\n" +
    "				      	rows=\"3\"\n" +
    "				      	cols=\"50\"\n" +
    "				      	class=\"form-control\"\n" +
    "				      	ng-model=\"event.data.comments\"\n" +
    "				      	ng-disabled=\"!event.diff\">\n" +
    "				      </textarea>\n" +
    "				    </div>\n" +
    "				</div>\n" +
    "				<div class=\"form-group\">\n" +
    "				    <label for=\"\" class=\"col-xs-3 control-label\">Comentario para uso interno (opcional)</label>\n" +
    "				    <div class=\"col-xs-9\">\n" +
    "				      <textarea\n" +
    "				      	rows=\"3\"\n" +
    "				      	cols=\"50\"\n" +
    "				      	class=\"form-control\"\n" +
    "				      	ng-model=\"event.data.otherComments\"\n" +
    "				      	ng-disabled=\"!event.diff\">\n" +
    "				      </textarea>\n" +
    "				    </div>\n" +
    "				</div>\n" +
    "			</form>\n" +
    "		</div>\n" +
    "	\n" +
    "	<div class=\"modal-footer\">\n" +
    "		<button\n" +
    "			ng-if=\"event.diff\"\n" +
    "			ng-click=\"event.save()\"\n" +
    "			type=\"button\"\n" +
    "			class=\"btn btn-primary\">{{(event.data.token)? 'Editar' : 'Agendar'}}\n" +
    "		</button>	\n" +
    "		<button\n" +
    "			type=\"button\"\n" +
    "			class=\"btn btn-default\"\n" +
    "			ng-click=\"event.close()\">{{(event.data.token && event.diff)? 'Cancelar' : 'Cerrar'}}\n" +
    "		</button>\n" +
    "	</div>\n" +
    "</div>\n" +
    ""; 
if(typeof TEMPLATES === 'undefined') {var TEMPLATES = {};}
TEMPLATES['app/directives/tbjscheduling/tbjschedulingView.html'] = "<div class=\"container-fluid\">\n" +
    " 	<div class=\"row-fluid\">\n" +
    "		<div class=\"col-xs-offset-1 col-xs-10\">\n" +
    "			<div\n" +
    "				ng-if=\"uiConfig\"\n" +
    "				calendar=\"myCalendar\"\n" +
    "				ui-calendar=\"uiConfig.calendar\"\n" +
    "				ng-model=\"eventSources\" >\n" +
    "			</div>\n" +
    "        	<span class=\"label label-info\">En espera</span>\n" +
    "    	    <span class=\"label label-success\">Aprobado</span>\n" +
    "    		<span class=\"label label-danger\">Rechazado</span>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<script type=\"text/ng-template\" id=\"tooltipTemplate.html\">\n" +
    "		<div class=\"container-fluid tooltip-widget\">\n" +
    "		    <!-- <h4>Entrevista para el cargo</h4> -->\n" +
    "		    <h3>{{selectedEvent.originalEvent.jobtitle}}</h3>\n" +
    "		    <p>Fecha: {{selectedEvent.originalEvent.date | date: 'dd-MM-yyyy'}}</p>\n" +
    "		    <p>Quienes asisten:</p>\n" +
    "		    <ul>\n" +
    "		    	<li ng-repeat=\"applicant in selectedEvent.originalEvent.applicants\">{{applicant.name}} {{applicant.lastName}}</li>\n" +
    "		    </ul>\n" +
    "		</div>\n" +
    "	</script>	\n" +
    "</div>\n" +
    "\n" +
    ""; 
/**
*  Modulo Principal <sesparza>
*/

(function() {
    angular
            .module('widget-calendar', ['ngRoute','ui.calendar','ui.bootstrap','angularModalService']);
})();

/**
 *  Rutas <sesparza>
 */

(function() {
    'use strict';

    angular
        .module('widget-calendar')
        .config(ConfigureModule)
        .run(RunModule);

    ConfigureModule.$inject = [];

    function ConfigureModule() {}

    RunModule.$inject = [];

    function RunModule() {
        console.log('widget-calendar Iniciado...');
    }
})();

/**
*  Constantes Globales <sesparza>
*/

(function() {
    'use strict';

    angular
        .module('widget-calendar')
        .value('configRoute', 'app/config/')
        .value('filtersRoute', 'app/filters/')
        .value('catalogsRoute', 'app/catalogs/')
        .value('directivesRoute', 'app/directives/')
        .value('templatesRoute', 'app/templates/')
        .value('defautLanguage', 'es_cl')
        .value('timeZone', 'America/Santiago')
        .value('statusColor', {
            0: 'green',
            1: '#31b0d5',
            2: 'red'
        })
})();

/**
 *  calendar <sesparza>
 */

(function() {
    'use strict';

    angular
        .module('widget-calendar')
        .controller('calendarController', calendarController);

    calendarController.$inject = ['$scope', '$uibModalInstance', 'eventId'];

    function calendarController($scope, $uibModalInstance, eventId) {
        var vm = this;
        $scope.close = close;
        $scope.eventId = eventId;
        $scope.okEvent = okEvent;
       ///////////////////////
       function close(){
       		$uibModalInstance.dismiss('cancel');
       }
       function okEvent(item,type){
    		$uibModalInstance.close(item);
       }


    }
})();

/**
 *  calendar <sesparza>
 */

(function() {
    'use strict';

    angular
        .module('widget-calendar')
        .controller('eventController', eventController);

    eventController.$inject = ['$scope', '$uibModalInstance', 'event', '$q'];

    function eventController($scope, $uibModalInstance, event, $q) {
        var vm = this;
        //Manejo del modal
        vm.save = save;
        vm.remove = remove;      
        vm.close = close;
        
        var today = moment();
        //event.start = moment(event.start).add(1, 'days')
        console.log('event.start', event.start)
        vm.diff = event.start.diff(today, 'days') >= 0;
        console.log('vm.diff', vm.diff)

        
        init();
        ///////////////////////
        function init() {
            var getE = event._getMethod || getEvent;

            getE(event.id).then(function(data){
                vm.data = data;

                vm.data.date = moment(data.date).toDate();

                var hour = data.hour.split(':')[0];
                var minutes = data.hour.split(':')[1];
                vm.data.start = moment().hour(hour).minutes(minutes);

                hour = data.hour2.split(':')[0];
                minutes = data.hour2.split(':')[1];
                vm.data.end = moment().hour(hour).minutes(minutes);

            }, onError);
        }

        function save() {
            var saveE = event._saveMethod || saveEvent;
            var data = angular.copy(vm.data);

            data.applicants = parseIds(data.applicants);
            data.start.hour = (data.start.hour < 10)? '0' + data.start.hour : data.start.hour;
            data.end.hour = (data.end.hour < 10)? '0' + data.end.hour : data.end.hour;
            data.hour = data.start.hour + ':' + data.start.minutes;
            data.hour2 = data.end.hour + ':' + data.end.minutes;

            delete data['start'];
            delete data['end'];

            saveE(data).then(function(result){
                console.log('Datos guardados', result);
                $uibModalInstance.close(result);
            }, onError);
        }

        function remove() {
            var removeE = event._removeMethod || removeEvent;

            removeE(event.token).then(function(result){
                console.log('Eliminado', event.token);
                $uibModalInstance.close(result);
            }, onError);
        }

        function close(){
            $uibModalInstance.dismiss('close');
        }
        
        //Nuevo Evento - Promise
        function getEvent(token) {
            var deferred = $q.defer();
            deferred.resolve({
                date: event.start.toDate(),
                hour: moment().format('HH:mm'),
                hour2: moment().add(1, 'hours').format('HH:mm'),
                jobtitle: event.title,
                jobId: event.jobId,
                applicants: event.applicants
            });
            return deferred.promise;
        }

        //Guardar Evento - Promise
        function saveEvent(data) {
            var deferred = $q.defer();
            deferred.resolve({});
            return deferred.promise;
        }

        //Cancelar Evento - Promise
        function removeEvent(data) {
            var deferred = $q.defer();
            deferred.resolve({});
            return deferred.promise;
        }

        ////////////////
        //UTIL
        function parseIds(arr) {
            var result = [];
            arr = arr || [];
            arr.forEach(function(elm){
                result.push(elm.id);
            });
            return result;
        }

        function onError(err) {
            console.log('Problemas', err);
        }
    }
})();

/**
 *  calendar <sesparza>
 */

(function() {
    'use strict';

    angular
        .module('widget-calendar')
        .controller('testController', testController);

    testController.$inject = ['scheduleWidgetService'];

    function testController(scheduleWidgetService) {
        var vm = this;
        vm.config = {
          session: {
            userid: 1,
            name: '',
            email: ''
          },
          portal: {
            url: '',
            domainId: 1
          },
          services: {
            schedule: scheduleWidgetService
          }
        };

        vm.offer = {
          id: 1,
          title: 'la ofertaX'
        }

        vm.applicants = []
    }
})();

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

/**
 *  config <sesparza>
 */

(function() {
    'use strict';

    angular
        .module('widget-calendar')
        .factory('configService', configService);

    configService.$inject = ['$http'];

    function configService($http) {
        var service = {
            get:get
        };

        return service;

        ///////////////
        function get(cb){
            var req = $http.get('http://192.168.1.10:3000/app/config/config.json');
            req.then(function(data){
                if (data.statusText =="OK"){
                    var col = changeColor(data.data)
                    cb(col)
                }

            },function(error){
                console.log(error);
                cb([]);
            });

           // return 
        }
        function changeColor (data) {
            for (var i = data.length - 1; i >= 0; i--) {
                if (data[i].estado == 1){
                    data[i].color='#449d44';//aprobado
                }
                if (data[i].estado == 2){
                    data[i].color='#c9302c';//rechazado
                }

            };
             
            return data;
        }
    }
})();
                             
/**
 *  message Service <sesparza>
 */

(function() {
    'use strict';

    angular
        .module('widget-calendar')
        .factory('messageWidgetService', messageWidgetService);

    messageWidgetService.$inject = [];

    function messageWidgetService() {
        var srv = {
            show: show
        };

        return srv;

        ///////////////

        function show(type, message) {
           alert(message);
        }
    }
})();

/**
 *  Schedule Service <sesparza>
 */

(function() {
    'use strict';

    angular
        .module('widget-calendar')
        .factory('scheduleWidgetService', scheduleWidgetService);

    scheduleWidgetService.$inject = ['$q', 'timeZone', 'statusColor'];

    function scheduleWidgetService($q, timeZone, statusColor) {
        var srv = {
            getAppointments: getAppointments,
            edit: edit,
            create: create,
            remove: remove,
            cancel: cancel
        };

        return srv;

        ///////////////
        function getAppointments(offerId) {
            var deferred = $q.defer();

            /////////////////////////////
            //Resultado del servicio
            var arrResult = [
                {
                    token: "tokendelagendamiento",
                    jobId: 1,
                    jobtitle: "titulodelaoferta",
                    date: "2016-12-28",
                    hour1: "10:00",
                    hour2: "12:00",
                    status: 1,
                    applicants: [
                        {
                            id: "1",
                            name: "Jorge",
                            lastName: "vergara"
                        },
                        {
                            id: "2",
                            name: "Tatiana",
                            lastName: "Lobos"
                        }
                    ]
                }
            ];
            //////////////////////////////

            var result = toCalendarFormat(arrResult);

            deferred.resolve(result);
            return deferred.promise;
        }

        //Transforma el resultado en uno compatible con el calendario
        function toCalendarFormat(events) {
            events = events || [];
            var newFormat = [];

            events.forEach(function(ev){
                var startDate = moment(ev.date).hour(ev.hour1.split(':')[0]).minute((ev.hour1.split(':')[1]));
                var endDate = moment(ev.date).hour(ev.hour2.split(':')[0]).minute((ev.hour2.split(':')[1]));

                var event = {
                    id: ev.token,
                    title: ev.hour1 + '-' + ev.hour2, //ev.jobtitle,
                    start: startDate,
                    end: endDate,
                    color: statusColor[ev.status],
                    timezone: timeZone,
                    status: ev.status,
                    originalEvent: ev,
                    _getMethod: get,
                    _saveMethod: edit,
                    _removeMethod: remove
                };

                newFormat.push(event);
            });

            return newFormat;
        }

        function get(token) {
            var deferred = $q.defer();

            /////////////////////////////
            //Resultado del servicio
            deferred.resolve({
              token: "asass",
              comments: "comentarios",
              jobId: "idOferta",
              jobtitle: "titulo de la oferta",
              interviewer: "juan perez",
              locationInterview: "ubicacion",
              date: "2016-12-28",
              hour: "10:00",
              interviewerEmail: "juan@perez.com",
              hour2: "12:00",
              sendBackupMail: false,
              applicants: [
                {
                  id: 1,
                  firstName: "",
                  lastName: "",
                  linkCv: "urldeladmin+personaid"
                }
              ],
              otherComments: "cualquier comentario"
            });
            ///////////////////////////////

            return deferred.promise;
        }



        function create(data) {
          var deferred = $q.defer();
          deferred.resolve({success: true, message: 'Evento creado!'});
          return deferred.promise;
        }

        function edit(data) {
          var deferred = $q.defer();
          deferred.resolve({success: true, message: 'Datos guardados'});
          return deferred.promise;
        }

        function remove(token) {
          var deferred = $q.defer();
          deferred.resolve({});
          return deferred.promise;
        }

        function cancel(data) {

        }
    }
})();

/**
 *  Template Service <sesparza>
 */

(function() {
    'use strict';

    angular
        .module('widget-calendar')
        .factory('templateService', templateService);

    templateService.$inject = [];

    function templateService() {
        var srv = {
            get: get
        };

        return srv;

        ///////////////

        function get(id) {
           return (TEMPLATES[id])? TEMPLATES[id] : '';
        }
    }
})();

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
    "	</div>\n" +
    "\n" +
    "	<div class=\"modal-body\">\n" +
    "		<div class=\"container-fluid\">\n" +
    "			<!-- <button\n" +
    "		    	ng-if =\"event.data.token && event.diff\"\n" +
    "		    	type=\"button\"\n" +
    "		    	class=\"pull-right btn btn-danger\"\n" +
    "		    	ng-click=\"event.removeEvent()\">Anular Cita\n" +
    "		    </button> -->\n" +
    "			<h4>Entrevista para el Cargo</h4>\n" +
    "			<h4><strong>{{event.data.jobtitle}}</strong></h4>\n" +
    "			\n" +
    "			<form name=\"eventform\" class=\"form-horizontal\" role=\"form\" ng-validate>\n" +
    "				<div class=\"form-group\" ng-if=\"event.diff\">\n" +
    "					<div class=\"col-xs-4\">\n" +
    "						<label for=\"\" class=\"control-label\">Hora inicio <span class=\"text-danger\">(*)</span></label>\n" +
    "						<div\n" +
    "							uib-timepicker\n" +
    "							ng-model=\"event.data.start\"\n" +
    "							hour-step=\"1\"\n" +
    "							minute-step=\"1\"\n" +
    "							show-meridian=\"false\"\n" +
    "							required>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"col-xs-4\">\n" +
    "						<label for=\"\" class=\"control-label\">Hora término <span class=\"text-danger\">(*)</span></label>\n" +
    "						<div\n" +
    "							uib-timepicker\n" +
    "							ng-model=\"event.data.end\"\n" +
    "							hour-step=\"1\"\n" +
    "							minute-step=\"1\"\n" +
    "							show-meridian=\"false\"\n" +
    "							required>\n" +
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
    "					      <label for=\"\" class=\"control-label\">Entrevistador <span class=\"text-danger\">(*)</span></label>\n" +
    "					      <input\n" +
    "						      type=\"text\"\n" +
    "						      ng-model=\"event.data.interviewer\"\n" +
    "						      class=\"form-control\"\n" +
    "						      id=\"\"\n" +
    "						      ng-disabled=\"!event.diff\"\n" +
    "						      required>\n" +
    "					    </div>\n" +
    "					    <div class=\"col-xs-6\">\n" +
    "					      <label for=\"\" class=\"control-label\">Email <span class=\"text-danger\">(*)</span></label>\n" +
    "					      <input\n" +
    "					      	type=\"email\"\n" +
    "					      	ng-model=\"event.data.interviewerEmail\"\n" +
    "					      	class=\"form-control\"\n" +
    "					      	id=\"\"\n" +
    "					      	ng-disabled=\"!event.diff\"\n" +
    "					      	required>\n" +
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
    "				    <p ng-repeat=\"applicant in event.data.applicants\">{{applicant.firstName}} {{applicant.lastName}} <!-- <a href=\"{{applicant.linkCv}}\">Ver curriculum</a> --></p>\n" +
    "				</div>\n" +
    "				<hr>\n" +
    "				<div class=\"form-group\">\n" +
    "				    <label for=\"\" class=\"col-xs-3 control-label\">Lugar <span class=\"text-danger\">(*)</span></label>\n" +
    "				    <div class=\"col-xs-9\">\n" +
    "				      <input\n" +
    "				      	type=\"text\"\n" +
    "				      	ng-model=\"event.data.locationInterview\"\n" +
    "				      	class=\"form-control\"\n" +
    "				      	id=\"\"\n" +
    "				      	ng-disabled=\"!event.diff\"\n" +
    "				      	required>\n" +
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
    "				<!-- <div class=\"form-group\">\n" +
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
    "				</div> -->\n" +
    "				<p class=\"text-danger\" ng-if=\"event.showError\">Debe completar todos los campos requeridos (*)</p>\n" +
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
    "	<div class=\"row-fluid\" ng-if=\"!uiConfig.loaded\">\n" +
    "		<div class=\"col-xs-12\">\n" +
    "			<p class=\"alert alert-info\"><i class=\"fa fa-spinner fa-spin\"></i> Cargando datos...</p>\n" +
    "		</div>\n" +
    "	</div>\n" +
    " 	<div class=\"row-fluid\" ng-if=\"uiConfig.loaded\">\n" +
    "		<div class=\"col-xs-12\">\n" +
    "			<div\n" +
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
            .module('widget-calendar', ['ngRoute','ui.calendar','ui.bootstrap']);
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
        var today = moment();
        //Manejo del modal
        vm.save = save;
        vm.remove = remove;      
        vm.close = close;
        vm.showError = false;

        vm.diff = event.start.diff(today, 'days') >= 0;
        
        init();
        ///////////////////////
        function init() {
            var getE = event._getMethod || getEvent;

            if (event.id != 0) {
                getE(event._id).then(function(data){
                    console.log('DATA!', data)
                    vm.data = data;
                    vm.data.jobId = event.jobId;
                    vm.data.date = moment(data.date).toDate();
                    //Hora inicio
                    var hour = data.hour.split(':')[0];
                    var minutes = data.hour.split(':')[1];
                    vm.data.start = moment().hour(hour).minutes(minutes);
                    //Hora fin
                    hour = data.hour2.split(':')[0];
                    minutes = data.hour2.split(':')[1];
                    vm.data.end = moment().hour(hour).minutes(minutes);
                }, onError);
            } else {
                vm.data = {};
                vm.data.jobId = event.jobId;
                vm.data.jobtitle = event.title;
                vm.data.applicants = event.applicants;
                vm.data.date = event.start.toDate();
                vm.data.start = moment();
                vm.data.end = moment().add(1, 'hour');
            }  
        }
            

        function save() {
            console.log('eventform', $scope.eventform)
            if ($scope.eventform.$valid) {
                var saveE = event._saveMethod || saveEvent;
                var data = angular.copy(vm.data);
                data.applicants = parseIds(data.applicants);
                
                data.hour = moment(data.start).format('HH[:]mm');
                data.hour2 = moment(data.end).format('HH[:]mm');

                delete data['start'];
                delete data['end'];

                saveE(data).then(function(result){
                    $uibModalInstance.close(result.success);
                }, onError);
            } else {
                vm.showError = true;
            }
            
        }

        function remove() {
            var removeE = event._removeMethod || removeEvent;

            removeE(event.token).then(function(result){
                console.log('Eliminado', event.token);
                $uibModalInstance.close(result.success);
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

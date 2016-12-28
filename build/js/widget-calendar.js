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
    "	    <h3 class=\"modal-title\">{{(event.data.data.token && event.diff)? 'Nueva cita' : 'Cita'}} - {{event.data.start.format('DD-MM-YYYY')}}</h3>\n" +
    "	    <button\n" +
    "	    	ng-if =\"event.data.data.token && event.diff\"\n" +
    "	    	type=\"button\"\n" +
    "	    	class=\"pull-right btn btn-danger\"\n" +
    "	    	ng-click=\"event.removeEvent()\">Anular Cita\n" +
    "	    </button>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"modal-body\">\n" +
    "		<div class=\"container-fluid\">\n" +
    "			<h4>Entrevista para el Cargo</h4>\n" +
    "			<h4><strong>{{event.data.data.jobtitle}}</strong></h4>\n" +
    "			<form  class=\"form-horizontal\" role=\"form\">\n" +
    "				<div class=\"form-group\">\n" +
    "				    <div class=\"col-xs-3\">\n" +
    "				      <input\n" +
    "				      	type=\"time\"\n" +
    "				      	ng-model=\"event.data.data.hour\"\n" +
    "				      	class=\"form-control\"\n" +
    "				      	ng-disabled=\"!event.diff\">\n" +
    "				    </div>\n" +
    "				    <div class=\"col-xs-3\">\n" +
    "				      <input\n" +
    "				      	type=\"time\"\n" +
    "				      	ng-model=\"event.data.data.hour2\"\n" +
    "				      	class=\"form-control\"\n" +
    "				      	ng-disabled=\"!event.diff\">\n" +
    "				    </div>\n" +
    "				</div>\n" +
    "				<div class=\"form-group\">\n" +
    "				    <div class=\"row-fluid\">\n" +
    "					    <div class=\"col-xs-6\">\n" +
    "					      <label for=\"\" class=\"control-label\">Entrevistador</label>\n" +
    "					      <input\n" +
    "						      type=\"text\"\n" +
    "						      ng-model=\"event.data.data.interviewer\"\n" +
    "						      class=\"form-control\"\n" +
    "						      id=\"\"\n" +
    "						      ng-disabled=\"!event.diff\">\n" +
    "					    </div>\n" +
    "					    <div class=\"col-xs-6\">\n" +
    "					      <label for=\"\" class=\"control-label\">Email</label>\n" +
    "					      <input\n" +
    "					      	type=\"email\"\n" +
    "					      	ng-model=\"event.data.data.interviewerEmail\"\n" +
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
    "					      	ng-model=\"event.data.data.sendBackupMail\"\n" +
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
    "				      	ng-model=\"event.data.data.locationInterview\"\n" +
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
    "				      	ng-model=\"event.data.data.comments\"\n" +
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
    "				      	ng-model=\"event.data.data.otherComments\"\n" +
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
    "			ng-click=\"event.create()\"\n" +
    "			type=\"button\"\n" +
    "			class=\"btn btn-primary\">{{(event.data.data.token)? 'Editar' : 'Agendar'}}\n" +
    "		</button>	\n" +
    "		<button\n" +
    "			type=\"button\"\n" +
    "			class=\"btn btn-default\"\n" +
    "			ng-click=\"event.close()\">{{(event.data.data.token && event.diff)? 'Cancelar' : 'Cerrar'}}\n" +
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
    "		<!-- <div class=\"col-md-4\" >\n" +
    "			<div class=\"panel panel-info\">\n" +
    "				<div class=\"panel-heading\" ng-hide=\"upbar\" align=\"center\">Agenda</div>\n" +
    "					<div class=\"panel-heading\"  ng-show=\"upbar\">\n" +
    "						<a href=\"#\" class=\"control-label\" ng-click=\"clean()\">Continuar</a>\n" +
    "					    <button data-toggle=\"tooltip\" data-placement=\"right\" title=\"Eliminar\" type=\"button\" ng-click=\"remove(id)\" class=\"control-label close\" aria-hidden=\"true\">&times;</button>   	\n" +
    "					</div>\n" +
    "				<div class=\"panel-body\">\n" +
    "					<form  class=\"form-horizontal\" role=\"form\">\n" +
    "						<div class=\"form-group\">\n" +
    "						    <label for=\"\" class=\"col-sm-4 control-label\">Fecha:</label>\n" +
    "						    <label  for=\"\" class=\"col-sm-8 control-label\">{{fecha}}</label>\n" +
    "						</div>\n" +
    "						<div class=\"form-group\" ng-hide=\"info\">\n" +
    "						    <label for=\"\" class=\"col-sm-4 control-label\">Nombre:</label>\n" +
    "						    <label ng-hide=\"info\" for=\"\" class=\"col-sm-8 control-label\">Sebastian</label>\n" +
    "						</div>\n" +
    "						<div class=\"form-group\" ng-hide=\"info\">\n" +
    "						    <label for=\"\" class=\"col-sm-4 control-label\">Email:</label>\n" +
    "						    <label ng-hide=\"info\" for=\"\" class=\"col-sm-8 control-label\">Sebastian@tbj.cl</label>\n" +
    "						</div>  \n" +
    "						<div class=\"form-group\" ng-show=\"info\">\n" +
    "						    <label for=\"\" class=\"col-sm-4 control-label\">Hora:</label>\n" +
    "						    <div class=\"col-sm-8\">\n" +
    "						      <input type=\"input\" ng-model=\"hora\" class=\"form-control\" id=\"\" >\n" +
    "						    </div>\n" +
    "						</div>\n" +
    "						<div class=\"form-group\">\n" +
    "						    <label for=\"\" class=\"col-sm-4 control-label\">Lugar Entrevista:</label>\n" +
    "						    <label ng-hide=\"info\" for=\"\" class=\"col-sm-8 control-label\">{{lugar}}</label>\n" +
    "						    <div class=\"col-sm-8\" ng-show=\"info\">\n" +
    "						      <input type=\"text\" ng-model=\"lugar\" class=\"form-control\" id=\"\">\n" +
    "						    </div>\n" +
    "						</div>\n" +
    "						<div class=\"form-group\" ng-hide=\"info\">\n" +
    "						    <label for=\"\" class=\"col-sm-4 control-label\">Telefono:</label>\n" +
    "						    <label ng-hide=\"info\" for=\"\" class=\"col-sm-8 control-label\">99999999</label>\n" +
    "						</div>\n" +
    "						<div class=\"form-group\">\n" +
    "						    <label for=\"\" class=\"col-sm-4 control-label\">Entrevistador:</label>\n" +
    "						    <label ng-hide=\"info\" for=\"\" class=\"col-sm-8 control-label\">{{entrevistador}}</label>\n" +
    "						    <div class=\"col-sm-8\" ng-show=\"info\">\n" +
    "						      <input type=\"text\" ng-model=\"entrevistador\" class=\"form-control\" id=\"\">\n" +
    "						    </div>\n" +
    "						</div>\n" +
    "						<div class=\"form-group\">\n" +
    "						    <label for=\"\" class=\"col-sm-4 control-label\">Cargo:</label>\n" +
    "						    <label ng-hide=\"info\" for=\"\" class=\"col-sm-8 control-label\">{{cargo}}</label>\n" +
    "						    <div class=\"col-sm-8\" ng-show=\"info\">\n" +
    "						      <input type=\"text\" ng-model=\"cargo\" class=\"form-control\" id=\"\">\n" +
    "						    </div>\n" +
    "						</div>\n" +
    "						<div class=\"form-group\">\n" +
    "						    <label for=\"\" class=\"col-sm-4 control-label\">Observación:</label>\n" +
    "						    <label ng-hide=\"info\" for=\"\" class=\"col-sm-8 control-label\" >{{obs}}</label>\n" +
    "						    <div class=\"col-sm-8\" ng-show=\"info\">\n" +
    "						      <textarea   class=\"form-control\" ng-model=\"obs\" id=\"\"/></textarea>\n" +
    "						    </div>\n" +
    "						</div>\n" +
    "						<div class=\"checkbox\" ng-show=\"info\">\n" +
    "						  	<label>\n" +
    "						    	<input type=\"checkbox\" value=\"\" ng-model=\"notificar\">\n" +
    "						    	Notificar por Email al Candidato (la observación no se mostrará al entrevistado)\n" +
    "						  	</label>\n" +
    "						</div>\n" +
    "						<div class=\"form-group\">\n" +
    "						      	<button  ng-show=\"info\" type=\"submit\" class=\"form-control btn btn-primary\" ng-click=\"addEditEvent(id)\">Agendar</button>	\n" +
    "						</div>\n" +
    "	    			</form>\n" +
    "				</div>\n" +
    "			</div>		\n" +
    "		</div> -->\n" +
    "	</div>		\n" +
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

    eventController.$inject = ['$scope', '$uibModalInstance', 'event'];

    function eventController($scope, $uibModalInstance, event) {
        var vm = this;
        vm.close = close;
        vm.data = event;
        vm.create = create;
        vm.removeEvent = removeEvent;
        var today = moment();
        vm.diff = event.start.diff(today, 'days') >= 0;
      
       ///////////////////////
       function close(){
       		$uibModalInstance.dismiss('cancel');
       }

       function removeEvent() {
          $uibModalInstance.close(vm.data, true);
       }

       function create(){
    	    $uibModalInstance.close(vm.data);
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

    scheduleWidgetService.$inject = ['$q', 'timeZone'];

    function scheduleWidgetService($q, timeZone) {
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

            deferred.resolve({
                data: [
                    {
                        id:1,
                        title: "Sujeto 1",
                        start: "2016-12-27 13:00",
                        color:"#31b0d5",
                        timezone: timeZone,
                        status:0,
                        data: {
                           token: 'asass',
                           comments: 'comentarios',
                           jobtitle: 'titulo de la oferta',
                           interviewer: 'juan perez',
                           locationInterview: 'ubicacion',
                           date: '',
                           hour: '',
                           interviewerEmail: 'juan@perez.com',
                           //NUEVOS
                           hour2: '',
                           checkInterviewer: true,
                           sendBackupMail: false,
                           applicants: [
                            {
                                id: 1,
                                firstName: '',
                                lastName: '',
                            }
                           ],
                           otherComments: 'cualquier cosa'
                        }
                    },
                    {
                        id:2,
                        title: "Sujeto 2",
                        start: "2016-12-28 14:00",
                        color:"#31b0d5",
                        timezone: timeZone,
                        status:1,
                        data: {
                           token: 'sadasd',
                           comments: 'comentarios',
                           jobtitle: 'titulo de la oferta2',
                           interviewer: 'jose abarca',
                           locationInterview: 'gertrudis',
                           date: '',
                           hour: '',
                           interviewerEmail: 'jabarca@trabajando.com',
                           //NUEVOS
                           hour2: '',
                           checkInterviewer: true,
                           sendBackupMail: false,
                           applicants: [
                            {
                                id: 1,
                                firstName: '',
                                lastName: '',
                            }
                           ],
                           otherComments: 'otros comentarios'
                        }
                        /*"lugar":"lugar2",
                        "entrevistador":"entrevistador2",
                        "cargo":"cargo2",
                        "obs":"obs2",
                        "notificacion":false*/
                    }
                ]}
            );

            return deferred.promise;
        }

        function create(data) {
          var deferred = $q.defer();
          deferred.resolve({});
          return deferred.promise;
        }

        function edit(data) {
          var deferred = $q.defer();
          deferred.resolve({});
          return deferred.promise;
        }

        function remove(data) {
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

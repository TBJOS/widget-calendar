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
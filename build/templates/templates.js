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
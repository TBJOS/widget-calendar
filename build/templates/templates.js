if(typeof TEMPLATES === 'undefined') {var TEMPLATES = {};}
TEMPLATES['app/directives/tbjscheduling/modal.html'] = "<div class=\"modal-header\">\n" +
    "  <h3>{{modalOptions.headerText}}</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <p>{{modalOptions.bodyText}}</p>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button type=\"button\" class=\"btn\" \n" +
    "          data-ng-click=\"modalOptions.close()\">{{modalOptions.closeButtonText}}</button>\n" +
    "  <button class=\"btn btn-primary\" \n" +
    "          data-ng-click=\"modalOptions.ok();\">{{modalOptions.actionButtonText}}</button>\n" +
    "</div>"; 
if(typeof TEMPLATES === 'undefined') {var TEMPLATES = {};}
TEMPLATES['app/directives/tbjscheduling/tbjschedulingView.html'] = "\n" +
    "<div class=\"container-fluid\">\n" +
    "	 <div class=\"well\">\n" +
    "	 	<div class=\"row\">\n" +
    "    		<div class=\"col-md-8\">\n" +
    "    			<div ng-if=\"config\" calendar=\"myCalendar\" ui-calendar=\"uiConfig.calendar\" ng-model=\"eventSources\" ></div>\n" +
    "    	        	<span class=\"label label-info\">En espera</span>\n" +
    "		    	    <span class=\"label label-success\">Aprobado</span>\n" +
    "		    		<span class=\"label label-danger\">Rechazado</span>\n" +
    "    		</div>\n" +
    "    		<div class=\"col-md-4 well\" >\n" +
    "    			<!--<input type=\"button\" value=\"x\" ng-show=\"info\" ng-click=\"close()\">-->\n" +
    "    			<form  class=\"form-horizontal\" role=\"form\">\n" +
    "					<div class=\"form-group\" ng-show=\"upbar\">\n" +
    "					    <a href=\"#\" class=\"col-sm-4 control-label\" ng-click=\"clean()\">Continuar</a>\n" +
    "					    <a confirm=\"Are you sure?\" confirm-if=\"checked\" href=\"#\" class=\"col-sm-8 control-label\" ng-click=\"remove(id)\" >X</a>\n" +
    "					</div>\n" +
    "					<div class=\"form-group\">\n" +
    "					    <label for=\"\" class=\"col-sm-4 control-label\">Fecha:</label>\n" +
    "					    <label  for=\"\" class=\"col-sm-8 control-label\">{{fecha}}</label>\n" +
    "					</div>\n" +
    "					<div class=\"form-group\" ng-hide=\"info\">\n" +
    "					    <label for=\"\" class=\"col-sm-4 control-label\">Nombre:</label>\n" +
    "					    <label ng-hide=\"info\" for=\"\" class=\"col-sm-8 control-label\">Sebastian</label>\n" +
    "					</div>\n" +
    "					<div class=\"form-group\" ng-hide=\"info\">\n" +
    "					    <label for=\"\" class=\"col-sm-4 control-label\">Email:</label>\n" +
    "					    <label ng-hide=\"info\" for=\"\" class=\"col-sm-8 control-label\">Sebastian@tbj.cl</label>\n" +
    "					</div>  \n" +
    "					<div class=\"form-group\" ng-show=\"info\">\n" +
    "					    <label for=\"\" class=\"col-sm-4 control-label\">Hora:</label>\n" +
    "					    <div class=\"col-sm-8\">\n" +
    "					      <input type=\"input\" ng-model=\"hora\" class=\"form-control\" id=\"\" >\n" +
    "					    </div>\n" +
    "					</div>\n" +
    "					<div class=\"form-group\">\n" +
    "					    <label for=\"\" class=\"col-sm-4 control-label\">Lugar Entrevista:</label>\n" +
    "					    <label ng-hide=\"info\" for=\"\" class=\"col-sm-8 control-label\">{{lugar}}</label>\n" +
    "					    <div class=\"col-sm-8\" ng-show=\"info\">\n" +
    "					      <input type=\"text\" ng-model=\"lugar\" class=\"form-control\" id=\"\">\n" +
    "					    </div>\n" +
    "					</div>\n" +
    "					<div class=\"form-group\" ng-hide=\"info\">\n" +
    "					    <label for=\"\" class=\"col-sm-4 control-label\">Telefono:</label>\n" +
    "					    <label ng-hide=\"info\" for=\"\" class=\"col-sm-8 control-label\">99999999</label>\n" +
    "					</div>\n" +
    "					<div class=\"form-group\">\n" +
    "					    <label for=\"\" class=\"col-sm-4 control-label\">Entrevistador:</label>\n" +
    "					    <label ng-hide=\"info\" for=\"\" class=\"col-sm-8 control-label\">{{entrevistador}}</label>\n" +
    "					    <div class=\"col-sm-8\" ng-show=\"info\">\n" +
    "					      <input type=\"text\" ng-model=\"entrevistador\" class=\"form-control\" id=\"\">\n" +
    "					    </div>\n" +
    "					</div>\n" +
    "					<div class=\"form-group\">\n" +
    "					    <label for=\"\" class=\"col-sm-4 control-label\">Cargo:</label>\n" +
    "					    <label ng-hide=\"info\" for=\"\" class=\"col-sm-8 control-label\">{{cargo}}</label>\n" +
    "					    <div class=\"col-sm-8\" ng-show=\"info\">\n" +
    "					      <input type=\"text\" ng-model=\"cargo\" class=\"form-control\" id=\"\">\n" +
    "					    </div>\n" +
    "					</div>\n" +
    "					<div class=\"form-group\">\n" +
    "					    <label for=\"\" class=\"col-sm-4 control-label\">Observación:</label>\n" +
    "					    <label ng-hide=\"info\" for=\"\" class=\"col-sm-8 control-label\" >{{obs}}</label>\n" +
    "					    <div class=\"col-sm-8\" ng-show=\"info\">\n" +
    "					      <textarea   class=\"form-control\" ng-model=\"obs\" id=\"\"/></textarea>\n" +
    "					    </div>\n" +
    "					</div>\n" +
    "					<div class=\"checkbox\" ng-show=\"info\">\n" +
    "					  	<label>\n" +
    "					    	<input type=\"checkbox\" value=\"\" ng-model=\"notificar\">\n" +
    "					    	Notificar por Email al Candidato (la observación no se mostrará al entrevistado)\n" +
    "					  	</label>\n" +
    "					</div>\n" +
    "					<div class=\"form-group\">\n" +
    "					      	<button  ng-show=\"info\" type=\"submit\" class=\"form-control btn btn-primary\" ng-click=\"addEditEvent(id)\">Agendar</button>	\n" +
    "					</div>\n" +
    "\n" +
    "    			</form>\n" +
    "\n" +
    "    		</div>\n" +
    "    		\n" +
    "    	</div>		\n" +
    " 	</div>\n" +
    "</div>\n" +
    "\n" +
    ""; 
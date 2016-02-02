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

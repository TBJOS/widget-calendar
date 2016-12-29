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

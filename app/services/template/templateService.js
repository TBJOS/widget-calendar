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

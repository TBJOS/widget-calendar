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

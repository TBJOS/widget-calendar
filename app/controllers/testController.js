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

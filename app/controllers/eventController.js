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

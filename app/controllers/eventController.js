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
       /* 
        $scope.eventId = eventId;
        $scope.okEvent = okEvent;*/
       ///////////////////////
       function close(){
       		$uibModalInstance.dismiss('cancel');
       }
       function okEvent(item,type){
    		$uibModalInstance.close(item);
       }


    }
})();

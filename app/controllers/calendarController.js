/**
 *  calendar <sesparza>
 */

(function() {
    'use strict';

    angular
        .module('widget-calendar')
        .controller('calendarController', calendarController);

    calendarController.$inject = ['$scope', '$uibModalInstance', 'eventId'];

    function calendarController($scope, $uibModalInstance, eventId) {
        var vm = this;
        $scope.close = close;
        $scope.eventId = eventId;
        $scope.okEvent = okEvent;
       ///////////////////////
       function close(){
       		$uibModalInstance.dismiss('cancel');
       }
       function okEvent(item,type){
    		$uibModalInstance.close(item);
       }


    }
})();

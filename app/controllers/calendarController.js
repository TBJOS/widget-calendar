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
        $scope.deleteEvent = deleteEvent;
       ///////////////////////
       function close(){
       		$uibModalInstance.dismiss('cancel');
       }
       function deleteEvent(item){

    			$uibModalInstance.close(item);
 
       }


    }
})();

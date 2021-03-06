/**
 *  calendar <sesparza>
 */

(function() {
    'use strict';

    angular
        .module('widget-calendar')
        .controller('eventController', eventController);

    eventController.$inject = ['$scope', '$uibModalInstance', 'event', '$q'];

    function eventController($scope, $uibModalInstance, event, $q) {
        var vm = this;
        var today = moment();
        //Manejo del modal
        vm.save = save;
        vm.remove = remove;      
        vm.close = close;
        vm.showError = false;

        vm.diff = event.start.diff(today, 'days') >= 0;
        
        init();
        ///////////////////////
        function init() {
            var getE = event._getMethod || getEvent;

            if (event.id != 0) {
                getE(event._id).then(function(data){
                    console.log('DATA!', data)
                    vm.data = data;
                    vm.data.jobId = event.jobId;
                    vm.data.date = moment(data.date).toDate();
                    //Hora inicio
                    var hour = data.hour.split(':')[0];
                    var minutes = data.hour.split(':')[1];
                    vm.data.start = moment().hour(hour).minutes(minutes);
                    //Hora fin
                    hour = data.hour2.split(':')[0];
                    minutes = data.hour2.split(':')[1];
                    vm.data.end = moment().hour(hour).minutes(minutes);
                }, onError);
            } else {
                vm.data = {};
                vm.data.jobId = event.jobId;
                vm.data.jobtitle = event.title;
                vm.data.applicants = event.applicants;
                vm.data.date = event.start.toDate();
                vm.data.start = moment();
                vm.data.end = moment().add(1, 'hour');
            }  
        }
            

        function save() {
            console.log('eventform', $scope.eventform)
            if ($scope.eventform.$valid) {
                var saveE = event._saveMethod || saveEvent;
                var data = angular.copy(vm.data);
                data.applicants = parseIds(data.applicants);
                
                data.hour = moment(data.start).format('HH[:]mm');
                data.hour2 = moment(data.end).format('HH[:]mm');

                delete data['start'];
                delete data['end'];

                saveE(data).then(function(result){
                    $uibModalInstance.close(result.success);
                }, onError);
            } else {
                vm.showError = true;
            }
            
        }

        function remove() {
            var removeE = event._removeMethod || removeEvent;

            removeE(event.token).then(function(result){
                console.log('Eliminado', event.token);
                $uibModalInstance.close(result.success);
            }, onError);
        }

        function close(){
            $uibModalInstance.dismiss('close');
        }
        
        //Nuevo Evento - Promise
        function getEvent(token) {
            var deferred = $q.defer();
            deferred.resolve({
                date: event.start.toDate(),
                hour: moment().format('HH:mm'),
                hour2: moment().add(1, 'hours').format('HH:mm'),
                jobtitle: event.title,
                jobId: event.jobId,
                applicants: event.applicants
            });
            return deferred.promise;
        }

        //Guardar Evento - Promise
        function saveEvent(data) {
            var deferred = $q.defer();
            deferred.resolve({});
            return deferred.promise;
        }

        //Cancelar Evento - Promise
        function removeEvent(data) {
            var deferred = $q.defer();
            deferred.resolve({});
            return deferred.promise;
        }

        ////////////////
        //UTIL
        function parseIds(arr) {
            var result = [];
            arr = arr || [];
            arr.forEach(function(elm){
                result.push(elm.id);
            });
            return result;
        }

        function onError(err) {
            console.log('Problemas', err);
        }
    }
})();

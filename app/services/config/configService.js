/**
 *  config <sesparza>
 */

(function() {
    'use strict';

    angular
        .module('widget-calendar')
        .factory('configService', configService);

    configService.$inject = ['$http'];

    function configService($http) {
        var service = {
            get:get
        };

        return service;

        ///////////////
        function get(cb){
            var req = $http.get('http://192.168.1.10:3000/app/config/config.json');
            req.then(function(data){
                if (data.statusText =="OK"){
                    var col = changeColor(data.data)
                    cb(col)
                }

            },function(error){
                console.log(error);
                cb([]);
            });

           // return 
        }
        function changeColor (data) {
            for (var i = data.length - 1; i >= 0; i--) {
                if (data[i].estado == 1){
                    data[i].color='#449d44';//aprobado
                }
                if (data[i].estado == 2){
                    data[i].color='#c9302c';//rechazado
                }

            };
             
            return data;
        }
    }
})();
                             
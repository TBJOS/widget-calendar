/**
 *  Schedule Service <sesparza>
 */

(function() {
    'use strict';

    angular
        .module('widget-calendar')
        .factory('scheduleWidgetService', scheduleWidgetService);

    scheduleWidgetService.$inject = ['$q', 'timeZone', 'statusColor'];

    function scheduleWidgetService($q, timeZone, statusColor) {
        var srv = {
            getAppointments: getAppointments,
            edit: edit,
            create: create,
            remove: remove,
            cancel: cancel
        };

        return srv;

        ///////////////
        function getAppointments(offerId) {
            var deferred = $q.defer();

            /////////////////////////////
            //Resultado del servicio
            var arrResult = [
                {
                    token: "tokendelagendamiento",
                    jobId: 1,
                    jobtitle: "titulodelaoferta",
                    date: "2016-12-28",
                    hour1: "10:00",
                    hour2: "12:00",
                    status: 1,
                    applicants: [
                        {
                            id: "1",
                            name: "Jorge",
                            lastName: "vergara"
                        },
                        {
                            id: "2",
                            name: "Tatiana",
                            lastName: "Lobos"
                        }
                    ]
                }
            ];
            //////////////////////////////

            var result = toCalendarFormat(arrResult);

            deferred.resolve(result);
            return deferred.promise;
        }

        //Transforma el resultado en uno compatible con el calendario
        function toCalendarFormat(events) {
            events = events || [];
            var newFormat = [];

            events.forEach(function(ev){
                var startDate = moment(ev.date).hour(ev.hour1.split(':')[0]).minute((ev.hour1.split(':')[1]));
                var endDate = moment(ev.date).hour(ev.hour2.split(':')[0]).minute((ev.hour2.split(':')[1]));

                var event = {
                    id: ev.token,
                    title: ev.hour1 + '-' + ev.hour2, //ev.jobtitle,
                    start: startDate,
                    end: endDate,
                    color: statusColor[ev.status],
                    timezone: timeZone,
                    status: ev.status,
                    originalEvent: ev,
                    _getMethod: get,
                    _saveMethod: edit,
                    _removeMethod: remove
                };

                newFormat.push(event);
            });

            return newFormat;
        }

        function get(token) {
            var deferred = $q.defer();

            /////////////////////////////
            //Resultado del servicio
            deferred.resolve({
              token: "asass",
              comments: "comentarios",
              jobId: "idOferta",
              jobtitle: "titulo de la oferta",
              interviewer: "juan perez",
              locationInterview: "ubicacion",
              date: "2016-12-28",
              hour: "10:00",
              interviewerEmail: "juan@perez.com",
              hour2: "12:00",
              sendBackupMail: false,
              applicants: [
                {
                  id: 1,
                  firstName: "",
                  lastName: "",
                  linkCv: "urldeladmin+personaid"
                }
              ],
              otherComments: "cualquier comentario"
            });
            ///////////////////////////////

            return deferred.promise;
        }



        function create(data) {
          var deferred = $q.defer();
          deferred.resolve({success: true, message: 'Evento creado!'});
          return deferred.promise;
        }

        function edit(data) {
          var deferred = $q.defer();
          deferred.resolve({success: true, message: 'Datos guardados'});
          return deferred.promise;
        }

        function remove(token) {
          var deferred = $q.defer();
          deferred.resolve({});
          return deferred.promise;
        }

        function cancel(data) {

        }
    }
})();

/**
 *  Schedule Service <sesparza>
 */

(function() {
    'use strict';

    angular
        .module('widget-calendar')
        .factory('scheduleWidgetService', scheduleWidgetService);

    scheduleWidgetService.$inject = ['$q', 'timeZone'];

    function scheduleWidgetService($q, timeZone) {
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

            deferred.resolve({
                data: [
                    {
                        id:1,
                        title: "Sujeto 1",
                        start: "2016-12-27 13:00",
                        color:"#31b0d5",
                        timezone: timeZone,
                        status:0,
                        data: {
                           token: 'asass',
                           comments: 'comentarios',
                           jobtitle: 'titulo de la oferta',
                           interviewer: 'juan perez',
                           locationInterview: 'ubicacion',
                           date: '',
                           hour: '',
                           interviewerEmail: 'juan@perez.com',
                           //NUEVOS
                           hour2: '',
                           checkInterviewer: true,
                           sendBackupMail: false,
                           applicants: [
                            {
                                id: 1,
                                firstName: '',
                                lastName: '',
                            }
                           ],
                           otherComments: 'cualquier cosa'
                        }
                    },
                    {
                        id:2,
                        title: "Sujeto 2",
                        start: "2016-12-28 14:00",
                        color:"#31b0d5",
                        timezone: timeZone,
                        status:1,
                        data: {
                           token: 'sadasd',
                           comments: 'comentarios',
                           jobtitle: 'titulo de la oferta2',
                           interviewer: 'jose abarca',
                           locationInterview: 'gertrudis',
                           date: '',
                           hour: '',
                           interviewerEmail: 'jabarca@trabajando.com',
                           //NUEVOS
                           hour2: '',
                           checkInterviewer: true,
                           sendBackupMail: false,
                           applicants: [
                            {
                                id: 1,
                                firstName: '',
                                lastName: '',
                            }
                           ],
                           otherComments: 'otros comentarios'
                        }
                        /*"lugar":"lugar2",
                        "entrevistador":"entrevistador2",
                        "cargo":"cargo2",
                        "obs":"obs2",
                        "notificacion":false*/
                    }
                ]}
            );

            return deferred.promise;
        }

        function create(data) {
          var deferred = $q.defer();
          deferred.resolve({});
          return deferred.promise;
        }

        function edit(data) {
          var deferred = $q.defer();
          deferred.resolve({});
          return deferred.promise;
        }

        function remove(data) {
          var deferred = $q.defer();
          deferred.resolve({});
          return deferred.promise;
        }

        function cancel(data) {

        }
    }
})();

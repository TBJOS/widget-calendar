/**
 *  tbjscheduling  <sesparza>
 */

(function() {
    'use strict';

    angular
        .module('widget-calendar')
        //.filter('date',tbjschedulingFilter)
        .directive('tbjScheduling', tbjschedulingDirective);

    tbjschedulingDirective.$inject = ['directivesRoute', 'templateService','uiCalendarConfig','configService',];

    function tbjschedulingDirective(directivesRoute, templateService,uiCalendarConfig,configService) {
        return {
            restrict: 'AE',
            template: templateService.get(directivesRoute + 'tbjscheduling/tbjschedulingView.html'),
            replace: true,
            scope: false,
            link: function(scope, element, attrs) {

                var date = new Date();
                var mi = date.getMinutes();
                var h = date.getHours();
                var d = date.getDate();
                var m = date.getMonth()+1;
                var y = date.getFullYear();
                var col = '#31b0d5';
                var fechaClick="";
                var eventClick=false;
                scope.id="";
                scope.fecha=moment().format('YYYY-MM-DD');  // 5am PDT
                scope.hora=moment().format('HH:mm');  // 5am PDT
               // scope.xx=y+"-"+m+"-"+d;//date.toLocaleTimeString()
               // scope.fecha=new Date();//date.toLocaleString();//moment().format('YYYY-MM-DD'); //HH:m:s
               // scope.fecha=scope.fecha.tz('America/Santiago').format('ha z');  // 5am PDT
               // scope.fecha= new Date(scope.fecha);
                //var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
                //scope.fecha= new Date(Date.now() - tzoffset);
                ///////////////////////////
                scope.lugar = "" ;  
                scope.entrevistador = "" ;  
                scope.cargo = "" ;  
                scope.obs = "" ;  
                scope.notificar = false ;  
                scope.events = [];
                scope.info = true;
                scope.upbar = false;
                scope.eventSources=[];
                scope.addEditEvent = addEditEvent;
                scope.close = close;
                scope.remove = remove;
                scope.clean = clean;
                scope.onDayClick = onDayClick; 
                scope.alertEventOnClick = alertEventOnClick;
                scope.eventRender = eventRender;
                scope.eventMouseover = eventMouseover;
                scope.eventMouseout = eventMouseout;
                scope.config = false;
                init();
                /////////////////////////////
                function addEditEvent(index) {
                    //console.log("fechaaaa", scope.fecha+" "+scope.hora);
                    if (!eventClick){
                        //scope.uiConfig.calendar.events.
                        scope.config.push({
                            title: 'Sujeto A',
                            start:scope.fecha+" "+scope.hora,// scope.fecha.toJSON(),
                            color:col,
                            timezone:'America/Santiago',
                            lugar:scope.lugar,
                            entrevistador:scope.entrevistador,
                            cargo:scope.cargo,
                            obs:scope.obs,
                            notificacion:scope.notificar,
                            estado:0//0=en espera, 1=aprobado
                            
                        });                    
                    }else{//modo edicion
                        var indexConfig = findIndexByKeyValue(scope.config, "id", index);
                        scope.config[indexConfig].start=scope.fecha+" "+scope.hora;
                        scope.config[indexConfig].color=col;
                        scope.config[indexConfig].lugar=scope.lugar;
                        scope.config[indexConfig].entrevistador=scope.entrevistador;
                        scope.config[indexConfig].obs=scope.obs;
                        scope.config[indexConfig].notificacion=scope.notificar;
                        scope.config[indexConfig].estado=0;
                        //for (var i = 0; i < scope.config[].length; i++) {
                          //  if(indexConfig==scope.config[indexConfig])
                        //}
                    }
                   // console.log(scope.uiConfig.calendar.events[scope.uiConfig.calendar.events.length-1],"Agregado..");
               //limpiar datos
                    clean();
                };
                function remove(index) {
                   // $window.confirm('Are you sure you want to delete the Ad?');
                    var indexConfig = findIndexByKeyValue(scope.config, "id", index);
                    scope.config.splice(indexConfig,1);
                    clean();
                    scope.upbar=false;
                }
                function clean(){
                    scope.hora=moment().format('HH:mm');
                    scope.lugar = "" ;  
                    scope.entrevistador = "" ;  
                    scope.cargo = "" ;  
                    scope.obs = "" ;  
                    scope.notificar = false ;  
                    scope.upbar=false;
                    eventClick=false; 
                }
                function close(){
                   //  eventClick=false;
                }
                function onDayClick(dates, allDay, jsEvent){
                 //   var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
               // scope.fecha= new Date(Date.now() - tzoffset);

                    scope.fecha=dates.format();//new Date(dates);
                    fechaClick=scope.fecha;

                     //scope.fecha=moment(scope.fecha).tz('America/Santiago').format('YYYY-MM-DD HH:mm');
                };
                function alertOnDrop(event, dayDelta, minuteDelta, allDay, revertFunc, jsEvent, ui, view){
                    console.log("sa");
                }
                function findIndexByKeyValue(arraytosearch, key, valuetosearch) {
                    var estado =null;
                    for (var i = 0; i < arraytosearch.length; i++) {
                        if (arraytosearch[i][key] == valuetosearch) {
                          estado = i;
                        }
                    }
                    return estado;
                }
                function alertEventOnClick(calEvent, jsEvent, view){
                        scope.upbar=true;
                   // element.attr('title', calEvent.entrevistador);
                   console.log(calEvent.id,"...........id");
                    scope.id=calEvent.id;
                    eventClick=true;
                    scope.info = true;
                    var aux=calEvent.start._i;
                    var fulldate=aux.split(" ");
                    scope.fecha  = fulldate[0];
                    scope.hora  = fulldate[1]
                    scope.lugar = calEvent.lugar ;  
                    scope.entrevistador = calEvent.entrevistador ;  
                    scope.cargo = calEvent.cargo ;  
                    scope.obs = calEvent.obs ;  
                    scope.notificar = calEvent.notificacion ;
                };
                     /* Render Tooltip */
                function eventRender( event, element, view ) {
                   // console.log("eventRender");

                    //element.attr('title', event.title);
                    //element.attr('entrevistador', event.entrevistador);
                               
                    //element.attr({'tooltip': event.title,
                      //            'tooltip-append-to-body': true});
                   // $compile(element)(scope);
                };
                function eventMouseover (calEvent, jsEvent, view) {
                    if (!eventClick){
                        scope.info = false;
                        console.log("mouseover",calEvent);

                        scope.fecha  = calEvent._start._i;
                        scope.lugar = calEvent.lugar ;  
                        scope.entrevistador = calEvent.entrevistador ;  
                        scope.cargo = calEvent.cargo ;  
                        scope.obs = calEvent.obs ;  
                        scope.notificar = calEvent.notificacion ;               
                    }

                 }
                 function eventMouseout (event, jsEvent, view) {
                    console.log(eventClick,"eventclick")
                    if (!eventClick){

                    
                        scope.info = true;
                        if (fechaClick==""){

                            scope.fecha  = moment().format('YYYY-MM-DD');
                        }else{
                            scope.fecha  = fechaClick;
                        }
                        //scope.fecha  = scope.fechaClick;
                        scope.hora=moment().format('HH:mm');
                        scope.lugar = "" ;  
                        scope.entrevistador = "" ;  
                        scope.cargo = "" ;  
                        scope.obs = "";  
                        scope.notificar = false ;
                       
                    }
                     //eventClick=false; 
                  } 
                function init(){
                    configService.get(function(config){
                        console.log(config,"config");
                    scope.config = config;
                    if (config.length > 0){
                     /* config object */
                        scope.uiConfig = {
                            calendar:{
                                monthNames:['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio',
                                    'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
                                ],
                                dayNamesShort : ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],

                                height: 450,
                                editable: false,
                                timezone: "local",
                                header:{
                                  left: 'month agendaWeek agendaDay',
                                  center: 'title',
                                  right: 'today prev,next'
                                },
                                defaultView: 'month',
                                selectable: true,
                                selectHelper: true,
                                events : scope.config, 
                                dayClick: scope.onDayClick,
                                eventClick: scope.alertEventOnClick,
                                eventDrop: scope.alertOnDrop,
                                eventResize: scope.alertOnResize,
                                eventRender: scope.eventRender,
                                eventMouseover:scope.eventMouseover,
                                eventMouseout:scope.eventMouseout
                            }
                        };
                    }else{console.log("no data!")} 
                    });


                    /* add custom event*/


                }
            }
        };
    }
})();

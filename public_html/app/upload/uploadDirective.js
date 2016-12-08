
(function () {
    'use strict';

    angular.module('whiteboardwhere.upload')
    
    

    
        /***************************************************************************************
        * Redirect the user to the homepage
        ****************************************************************************************/ 
        .directive("takeSnapshot", ['$location', function($location){
            return function(scope, element, attrs){
                element.bind("click", function(){
                    
                    
                    
                    Webcam.snap( function(data_uri) {
                        document.getElementById('picture').innerHTML = '<img src="'+data_uri+'"/>';
                        
                        document.getElementById("result-wrapper").style.display = "inherit";
                    } );

                    
                });
            };
        }])

    
        ;
}());



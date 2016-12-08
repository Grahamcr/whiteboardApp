
(function () {
    'use strict';

    angular.module('whiteboardwhere.upload')
    
    

    
        /***************************************************************************************
        * Take a picture using the phone camera or webcam and place the image in the result wrapper ****************************************************************************************/ 
        .directive("takeSnapshot", ['$location', function($location){
            return function(scope, element, attrs){
                element.bind("click", function(){
                    
                    
                    
                    Webcam.snap( function(data_uri) {
                        document.getElementById('picture').innerHTML = '<img src="'+data_uri+'"/>';
                        
                        scope.test = data_uri;
                        
                        document.getElementById("result-wrapper").style.display = "inherit";
                    } );

                    
                });
            };
        }])
    
        /***************************************************************************************
        * Remove the result image and allow the user to retake the picture ****************************************************************************************/ 
        .directive("retakeSnapshot", ['$location', function($location){
            return function(scope, element, attrs){
                element.bind("click", function(){
                       
                    document.getElementById("result-wrapper").style.display = "none";

                    
                });
            };
        }])
    


        /***************************************************************************************
        * Pass the variable to the api call so that it can be uploaded ****************************************************************************************/ 
        .directive("uploadSnapshot", ['$location', function($location){
            return function(scope, element, attrs){
                element.bind("click", function(){
                       
                    window.open("#/success","_self");
                    
                    
                });
            };
        }])
    

    

    
        ;
}());



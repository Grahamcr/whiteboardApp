
(function () {
    'use strict';

    angular.module('whiteboardwhere.success')
    
    
        /***************************************************************************************
        * Remove the result image and allow the user to retake the picture ****************************************************************************************/ 
        .directive("upload", ['$location', function($location){
            return function(scope, element, attrs){
                element.bind("click", function(){
                       
                    document.getElementById("success-overlay").style.visibility = "inherit";
                    
                    document.getElementById("uploading").style.display = "none";
                    
                    document.getElementById("complete").style.display = "inherit";
                    
                });
            };
        }])

    
        /***************************************************************************************
        * Remove the result image and allow the user to retake the picture ****************************************************************************************/ 
        .directive("cancel", ['$location', function($location){
            return function(scope, element, attrs){
                element.bind("click", function(){
                       
                   window.open("#/","_self");

                    
                });
            };
        }])
    
        ;
}());



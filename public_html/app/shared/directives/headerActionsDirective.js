
(function () {
    'use strict';

    angular.module('whiteboardwhere')
    
    
    
        /***************************************************************************************
        * Redirect the user to the homepage
        ****************************************************************************************/ 
        .directive("redirectHome", ['$location', function($location){
            return function(scope, element, attrs){
                element.bind("click", function(){
                    
                    window.open("#/","_self");

                    
                });
            };
        }])
    
    
        /***************************************************************************************
        * Redirect the user to the homepage
        ****************************************************************************************/ 
        .directive("redirectBrowse", ['$location', function($location){
            return function(scope, element, attrs){
                element.bind("click", function(){
                    
                    window.open("#/browse","_self");

                    
                });
            };
        }])
    
    
        /***************************************************************************************
        * Redirect the user to the homepage
        ****************************************************************************************/ 
        .directive("redirectTakePic", ['$location', function($location){
            return function(scope, element, attrs){
                element.bind("click", function(){
                    
                    window.open("#/upload","_self");

                    
                });
            };
        }])
    
    
      /***************************************************************************************
        * Scroll down when the user clicks the learn more link or down cheveron
        ****************************************************************************************/ 
        .directive("learnMoreScroll", ['$location', function($location){
            return function(scope, element, attrs){
                element.bind("click", function(){

                          var target = $("#learn-more-target");
                          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                          if (target.length) {
                            $('html, body').animate({
                              scrollTop: target.offset().top
                            }, 1000);
                            return false;
                          }
                    
                });
            };
        }])
       
    
    
        ;
}());



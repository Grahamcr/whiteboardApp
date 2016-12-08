
(function() {

  'use strict';

  angular.module('whiteboardwhere.upload')
    .controller('UploadController', Upload);

  /*******************************************************************************
  * 
  ********************************************************************************/
  function Upload($scope, $location, $window){
      Webcam.attach( '#camera-viewport' );
      $scope.title = "Capture Picture of Whiteboard";
      
      /*******************************************************************************
      *  Global Variables
      ********************************************************************************/
      
      
      
    
    /***************************************************************************************
    * On Page Load Function
    ****************************************************************************************/   
		angular.element(document).ready(function () {

    });
      
};




}());


    
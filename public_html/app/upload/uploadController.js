
(function() {

  'use strict';

  angular.module('whiteboardwhere.upload')
    .controller('UploadController', Upload);

  /*******************************************************************************
  * 
  ********************************************************************************/
  function Upload($scope, $location, $window, DataTransferService){
      Webcam.attach( '#camera-viewport' );
      $scope.title = "Capture Picture of Whiteboard";
      
      /*******************************************************************************
      *  Global Variables
      ********************************************************************************/
      $scope.image = undefined;
      
      
    $scope.takeSnapshot = function() {
            Webcam.snap( function(data_uri) {
                document.getElementById('picture').innerHTML = '<img src="'+data_uri+'"/>';

                $scope.image = data_uri;
                
                DataTransferService.set(data_uri);

                document.getElementById("result-wrapper").style.display = "inherit";
            } );  
    };
    /***************************************************************************************
    * On Page Load Function
    ****************************************************************************************/   
		angular.element(document).ready(function () {

    });
      
};




}());


    
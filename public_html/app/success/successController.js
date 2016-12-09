
(function() {

  'use strict';

  angular.module('whiteboardwhere.success')
    .controller('SuccessController', Success);

  /*******************************************************************************
  * 
  ********************************************************************************/
  function Success($scope, $location, $window, $routeParams, ImageUploadService, DataTransferService){
      
      
      /*******************************************************************************
      *  Global Variables
      ********************************************************************************/
      $scope.title = "Upload";
      $scope.imageData = undefined;


      
      /*******************************************************************************
      *  Make a call to the ImageService to upload Base64 image to the image hosting service and modify the screen to show new options to user
      ********************************************************************************/
      $scope.upload = function() {

            document.getElementById("success-overlay").style.visibility = "inherit";

            document.getElementById("uploading").style.display = "none";

            document.getElementById("complete").style.display = "inherit";
            
            var config = {};
            ImageUploadService.setImageInfo($scope.imageData, config)
             .success(function (data) {
                 $scope.images = data;


            });
      };
      
    
    /***************************************************************************************
    * On Page Load Function
    ****************************************************************************************/   
		angular.element(document).ready(function () {
            var imageData = DataTransferService.get();
            $scope.imageData = imageData;

    });
      
};




}());


    
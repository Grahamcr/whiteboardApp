
(function() {

  'use strict';

  angular.module('whiteboardwhere.success')
    .controller('SuccessController', Success);

  /*******************************************************************************
  * 
  ********************************************************************************/
  function Success($scope, $location, $window, $routeParams, DataTransferService){
      
      
      /*******************************************************************************
      *  Global Variables
      ********************************************************************************/
      $scope.title = "Upload";
      $scope.imageData = undefined;


      
      
    
    /***************************************************************************************
    * On Page Load Function
    ****************************************************************************************/   
		angular.element(document).ready(function () {
            var imageData = DataTransferService.get();
            $scope.imageData = imageData;

    });
      
};




}());


    
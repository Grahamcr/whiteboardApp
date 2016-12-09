
(function() {

  'use strict';

  angular.module('whiteboardwhere.browse')
    .controller('BrowseController', Browse);

  /*******************************************************************************
  * 
  ********************************************************************************/
  function Browse($scope, $location, $window, $routeParams, DataTransferService){
      
      
      /*******************************************************************************
      *  Global Variables
      ********************************************************************************/
      $scope.title = "Browse";
      $scope.images = ["https://d1avok0lzls2w.cloudfront.net/uploads/blog/52b890a8554da2.07186970.jpg", "https://durv.files.wordpress.com/2012/02/2012-02-02-13-40-52.jpg", "https://d1avok0lzls2w.cloudfront.net/uploads/blog/5631501c761db7.99287967.jpg", "http://agilitrix.com/wp-content/uploads/2010/05/Product-Backlog-Mgmt-Cycle.jpg"]


      
      
    
    /***************************************************************************************
    * On Page Load Function
    ****************************************************************************************/   
		angular.element(document).ready(function () {


    });
      
};




}());


    
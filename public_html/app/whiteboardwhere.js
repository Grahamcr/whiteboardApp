/* 
 * Copyright (c) 2015 General Electric Company. All rights reserved.
 * 
 * The copyright to the computer software herein is the property of
 * General Electric Company. The software may be used and/or copied only
 * with the written permission of General Electric Company or in accordance
 * with the terms and conditions stipulated in the agreement/contract
 * under which the software has been supplied.
 */
'use strict';

angular.module('whiteboardwhere', [
    'ngResource',
    'whiteboardwhere.home',
    'whiteboardwhere.success',
    'whiteboardwhere.upload',
    'whiteboardwhere.browse'
    
]).config(['$httpProvider', function($httpProvider) {
  $httpProvider.defaults.withCredentials = true;
}])



;



                

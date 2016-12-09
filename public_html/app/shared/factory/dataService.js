

'use strict';

angular.module('whiteboardwhere')



/*****************************************************************************************
* Used locally for front-end development by Craig to mock JSON for posts
*****************************************************************************************/
.factory('DataService', function ($resource, $http) {
    return {
        getTeamInfo: function () {
            return $http.get('app/home/exampleInfo/exampleinfo.json');
        }
    };
})


.factory('DataTransferService', function() {
    var savedData = {}
    function set(data) {
        savedData = data;
    }
    function get() {
        return savedData;
    }

    return {
        set: set,
        get: get
    }

});

;
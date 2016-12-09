

'use strict';

angular.module('whiteboardwhere')



/*****************************************************************************************
* Used locally for front-end development by Craig to mock JSON for posts
*****************************************************************************************/
.factory('ImageService', function ($resource, $http) {
    return {
        getImageInfo: function () {
            return $http.get('app/shared/fakeImages.json');
        }
    };
})

.factory('ImageUploadService', function ($resource, $http) {
    return {
        setImageInfo: function(data, config) {
            $http.post("url", data, config)
            .success(function (data, status, headers, config) {
            })
            .error(function (data, status, header, config) {
            });
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

})

;
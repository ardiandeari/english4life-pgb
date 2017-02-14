angular.module('APP.controllers', [])

.controller('TabsCtrl', function($scope){
    $scope.openForum = function() {
        var click = window.open('http://forum.englishforlife.mk', '_blank', 'location=no');
    };
})

.controller('HomeCtrl', function($scope) {

})

.controller('ContactCtrl', function($scope) {

})

.controller('ForumCtrl', function($scope) {

});

function openFilePicker(selection) {

    var srcType = Camera.PictureSourceType.SAVEDPHOTOALBUM;
    var options = setOptions(srcType);
    var func = createNewFileEntry;

    navigator.camera.getPicture(function cameraSuccess(imageUri) {

        // Do something

    }, function cameraError(error) {
        console.debug("Unable to obtain picture: " + error, "app");

    }, options);
});
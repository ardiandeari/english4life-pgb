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

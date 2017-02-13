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

import { Component } from '@angular/core';
import { Camera } from 'ionic-native';
@Component({
 selector: 'ForumCtrl',
 templateUrl: 'templates/tab-forum.html'
})
export class forum {
  base64Image
  constructor() {}
 accessGallery(){
   Camera.getPicture({
     sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,
     destinationType: Camera.DestinationType.DATA_URL
    }).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,'+imageData;
     }, (err) => {
      console.log(err);
    });
  }
}

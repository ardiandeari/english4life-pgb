document.addEventListener('deviceready', function () {
  // Enable to debug issues.
  // window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});

  var notificationOpenedCallback = function(jsonData) {
    console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
  };

  window.plugins.OneSignal
    .startInit("628d1526-f7ff-4e2a-b756-5903b615db06", "520151179814")
    .inFocusDisplaying(window.plugins.OneSignal.OSInFocusDisplayOption.None)
    .handleNotificationOpened(notificationOpenedCallback)
    .endInit();

  // Call syncHashedEmail anywhere in your app if you have the user's email.
  // This improves the effectiveness of OneSignal's "best-time" notification scheduling feature.
  // window.plugins.OneSignal.syncHashedEmail(userEmail);
}, false);

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

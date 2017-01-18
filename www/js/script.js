document.addEventListener('deviceready', function () {
  // Enable to debug issues.
  // window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
  
  var notificationOpenedCallback = function(jsonData) {
    console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
  };

  window.plugins.OneSignal
    .startInit("cd15e7a4-1b07-4185-82de-5d68179bbbb7", "YOUR_GOOGLE_PROJECT_NUMBER_IF_ANDROID")
    .inFocusDisplaying(window.plugins.OneSignal.OSInFocusDisplayOption.None)
    .handleNotificationOpened(notificationOpenedCallback)
    .endInit();
  
  // Call syncHashedEmail anywhere in your app if you have the user's email.
  // This improves the effectiveness of OneSignal's "best-time" notification scheduling feature.
  // window.plugins.OneSignal.syncHashedEmail(userEmail);
}, false);
cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-admobpro.AdMob",
      "file": "plugins/cordova-plugin-admobpro/www/AdMob.js",
      "pluginId": "cordova-plugin-admobpro",
      "clobbers": [
        "window.AdMob"
      ]
    },
    {
      "id": "cordova-plugin-dialogs.notification",
      "file": "plugins/cordova-plugin-dialogs/www/notification.js",
      "pluginId": "cordova-plugin-dialogs",
      "merges": [
        "navigator.notification"
      ]
    },
    {
      "id": "cordova-plugin-dialogs.notification_android",
      "file": "plugins/cordova-plugin-dialogs/www/android/notification.js",
      "pluginId": "cordova-plugin-dialogs",
      "merges": [
        "navigator.notification"
      ]
    },
    {
      "id": "cordova-plugin-nativestorage.mainHandle",
      "file": "plugins/cordova-plugin-nativestorage/www/mainHandle.js",
      "pluginId": "cordova-plugin-nativestorage",
      "clobbers": [
        "NativeStorage"
      ]
    },
    {
      "id": "cordova-plugin-nativestorage.LocalStorageHandle",
      "file": "plugins/cordova-plugin-nativestorage/www/LocalStorageHandle.js",
      "pluginId": "cordova-plugin-nativestorage"
    },
    {
      "id": "cordova-plugin-nativestorage.NativeStorageError",
      "file": "plugins/cordova-plugin-nativestorage/www/NativeStorageError.js",
      "pluginId": "cordova-plugin-nativestorage"
    },
    {
      "id": "cordova-plugin-apprate.AppRate",
      "file": "plugins/cordova-plugin-apprate/www/AppRate.js",
      "pluginId": "cordova-plugin-apprate",
      "clobbers": [
        "AppRate",
        "window.AppRate"
      ]
    },
    {
      "id": "cordova-plugin-apprate.locales",
      "file": "plugins/cordova-plugin-apprate/www/locales.js",
      "pluginId": "cordova-plugin-apprate",
      "runs": true
    },
    {
      "id": "cordova-plugin-apprate.storage",
      "file": "plugins/cordova-plugin-apprate/www/storage.js",
      "pluginId": "cordova-plugin-apprate",
      "runs": true
    },
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "cordova-plugin-geolocation.geolocation",
      "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
      "pluginId": "cordova-plugin-geolocation",
      "clobbers": [
        "navigator.geolocation"
      ]
    },
    {
      "id": "cordova-plugin-geolocation.PositionError",
      "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
      "pluginId": "cordova-plugin-geolocation",
      "runs": true
    },
    {
      "id": "cordova-plugin-idfa.Idfa",
      "file": "plugins/cordova-plugin-idfa/www/Idfa.js",
      "pluginId": "cordova-plugin-idfa",
      "merges": [
        "cordova.plugins.idfa"
      ]
    },
    {
      "id": "cordova-plugin-inappbrowser.inappbrowser",
      "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
      "pluginId": "cordova-plugin-inappbrowser",
      "clobbers": [
        "cordova.InAppBrowser.open"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-extension": "1.5.4",
    "cordova-plugin-admobpro": "2.49.0",
    "cordova-plugin-dialogs": "2.0.2",
    "cordova-plugin-nativestorage": "2.3.2",
    "cordova-plugin-apprate": "1.7.2",
    "cordova-plugin-device": "2.0.3",
    "cordova-plugin-geolocation": "4.1.0",
    "cordova-support-android-plugin": "2.0.4",
    "cordova-plugin-idfa": "2.1.0",
    "cordova-plugin-inappbrowser": "5.0.0",
    "cordova-plugin-wkwebview-file-xhr": "3.1.0"
  };
});
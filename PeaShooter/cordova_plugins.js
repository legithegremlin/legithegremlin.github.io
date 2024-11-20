
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-plugin-fullscreen.AndroidFullScreen",
          "file": "plugins/cordova-plugin-fullscreen/www/AndroidFullScreen.js",
          "pluginId": "cordova-plugin-fullscreen",
        "clobbers": [
          "AndroidFullScreen"
        ]
        },
      {
          "id": "cordova-plugin-applovin-max.AppLovinMAX",
          "file": "plugins/cordova-plugin-applovin-max/www/applovinmax.js",
          "pluginId": "cordova-plugin-applovin-max",
        "clobbers": [
          "applovin"
        ]
        },
      {
          "id": "cordova-plugin-firebasex.FirebasePlugin",
          "file": "plugins/cordova-plugin-firebasex/www/firebase.js",
          "pluginId": "cordova-plugin-firebasex",
        "clobbers": [
          "FirebasePlugin"
        ]
        },
      {
          "id": "cordova-plugin-statusbar.statusbar",
          "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
          "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
          "window.StatusBar"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-plugin-androidx-adapter": "1.1.3",
      "cordova-plugin-applovin-max": "1.1.4",
      "cordova-plugin-firebasex": "14.2.1",
      "cordova-plugin-fullscreen": "1.3.0",
      "cordova-plugin-statusbar": "3.0.0",
      "cordova-plugin-vibration": "3.1.1"
    };
    // BOTTOM OF METADATA
    });
    
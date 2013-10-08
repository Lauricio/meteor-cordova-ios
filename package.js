Package.describe({
  summary: "Cordova 3.0.0 for iOS with core plugins"
});

Package.on_use(function (api) {
  api.use(['standard-app-packages']);
  api.export('Cordova');
  api.export('iosStatusBar');
  api.add_files('cordova-ios.js', 'client');
  api.add_files('control.js', 'client');
});

Package.describe({
  summary: "Cordova 3.0.0 for iOS with core plugins"
});

Package.on_use(function (api) {
  api.export('Cordova');
  api.add_files('cordova-ios.js', 'client');
});

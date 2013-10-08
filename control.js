
document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() {
        navigator.splashscreen.hide();
    }

// for iOS specific logic and styles, class name: 'in-webview-ios'
Session.set('ios-webview', 'in-webview-ios');

iosStatusBar = window.plugins.statusBar;


// iosStatusBar = {};
 document.addEventListener("deviceready", onDeviceReady, false);

     function onDeviceReady() {
        StatusBar.styleDefault();
         navigator.splashscreen.hide();
         //iosStatusBar = window.plugins.statusBar;
         receivedEvent('deviceready');
        var pushNotification = window.plugins.pushNotification;
        pushNotification.register(successHandler, errorHandler, {"badge":"true","sound":"true","alert":"true","ecb":"onNotificationAPN"});
    }

    successHandler = function(result) {
        console.log("Received result " + result);
        alert('Callback Success! Result = '+result)
    }
    errorHandler = function(error) {
        alert(error);
    }

    onNotificationAPN = function(e) {
            console.log("On Notification");
            if (e.alert) {
                console.log("Alert " + e.alert);
                navigator.notification.alert(e.alert);
            }
            if (e.badge) {
                console.log("Badge number " + e.badge);
                var pushNotification = window.plugins.pushNotification;
                pushNotification.setApplicationIconBadgeNumber(successHandler, errorHandler, e.badge);
            }
            if (e.sound) {
                console.log("Sound passed in " + e.sound);
                // var snd = new Media(e.sound);
                // snd.play();
            }
        }

// for iOS specific logic and styles, class name: 'in-webview-ios'
Session.set('ios-webview', 'in-webview-ios');




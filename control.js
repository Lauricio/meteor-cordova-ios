// iosStatusBar = {};
 document.addEventListener("deviceready", onDeviceReady, false);

                //  document.addEventListener("resume", function(){
                //   console.log('%c Resume   ',  'background: #5D76DB; color: white; padding: 1px 15px 1px 5px;');
                //     // navigator.notification.alert(e.messageFrom);
                //     alert("Resume")
                // }, false);
     function onDeviceReady() {
        // StatusBar.styleDefault();
         navigator.splashscreen.hide();
         //iosStatusBar = window.plugins.statusBar;

          var pushNotification = window.plugins.pushNotification;
         // alert(pushNotification);
          var myID = localStorage.getItem('clientStorage');
          var clientID = JSON.parse(myID);
          console.log("id:" + clientID);
          console.log("session" + Session.get('ClientId'));
          pushNotification.register(successHandler, errorHandler, {"badge":"true","sound":"true","alert":"true","ecb":"onNotificationAPN"});
    }

    successHandler = function(result) {
        console.log("Received result " + result);
        var userID = Meteor.userId() ? Meteor.userId() : Session.get('ClientId');
        // Meteor.call('tokenApnInsert', result, userID);
        var doWeHaveToken = ApnTokens.findOne({'_id': result});
        console.log(doWeHaveToken)
        if (doWeHaveToken) {
          if (doWeHaveToken.userId != userID && Meteor.userId())
            ApnTokens.update({'_id': result}, {$set: {userId: userID}})
        } else {
          ApnTokens.insert({_id:result,
            userId: userID,
            devicemodel: device.model,
            deviceversion: device.version,
            deviceplatform: device.platform,
            deviceuuid: device.uuid
          })
        }
        //alert('Callback Success! Result = '+result)
    }
    errorHandler = function(error) {
       // alert(error);
    }

    onNotificationAPN = function(e) {
            console.log("On Notification");
            console.log(e);
            if (e.alert) {
                console.log("Alert " + e.alert);
               // navigator.notification.alert(e.alert);
            }
            if (e.messageFrom) {
                console.log("messageFrom " + e.messageFrom);
                // alert(e.messageFrom);



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




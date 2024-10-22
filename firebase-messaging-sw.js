importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCDdL62iWV0wtQ9Ufzau4jsf-y8S1kp4oE",
  authDomain: "mathversesuma.firebaseapp.com",
  projectId: "mathversesuma",
  storageBucket: "mathversesuma.appspot.com",
  messagingSenderId: "705457202966",
  appId: "1:705457202966:web:2a53d2094a36283d3e5237"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message: ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

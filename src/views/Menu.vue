<template>
    <ion-page>
      <ion-split-pane content-id="main-content">
        <ion-menu content-id="main-content" type="overlay" style="--ion-item-background:#220e0f; --ion-background-color-step-150: #100708;">
          <ion-content>
            <ion-list id="inbox-list">
              <div style="display: inline-flex;">
                <img src="/public/suma.png" style="height: 50px;" alt="">
                <div>
                  <ion-list-header>MATHVERSE 2024</ion-list-header>
                  <ion-note>sumamatf.com</ion-note>
                </div>
              </div>
              
  
              <ion-menu-toggle :auto-hide="false" v-for="(p, i) in appPages" :key="i">
                <ion-item @click="selectedIndex = i" :router-link="p.url" lines="none" :detail="false" class="hydrated" :class="{ selected: selectedIndex === i }">
                  <ion-icon aria-hidden="true" slot="start" :ios="p.iosIcon" :md="p.mdIcon"></ion-icon>
                  <ion-label>{{ p.title }}</ion-label>
                </ion-item>
              </ion-menu-toggle>
            </ion-list>
          </ion-content>
        </ion-menu>
        <ion-router-outlet id="main-content"></ion-router-outlet>
      </ion-split-pane>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import {
    IonPage,
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonNote,
    IonRouterOutlet,
    IonSplitPane,
  } from '@ionic/vue';
  import { onMounted, ref } from 'vue';
  import {
    callOutline,
    callSharp,
    helpOutline,
    helpSharp,
    listOutline,
    listSharp,
    powerOutline,
    powerSharp,
    qrCodeOutline,
    timeOutline,
    timeSharp,
  } from 'ionicons/icons';
  import { PushNotifications } from '@capacitor/push-notifications';
  import { isPlatform } from '@ionic/vue'; 
  import { messaging, getToken, firebase, onMessage } from "@/firebase"; 
  import { useStore } from 'vuex';
  const selectedIndex = ref(0);
  const appPages = [
    {
      title: 'Agenda',
      url: '/',
      iosIcon: timeOutline,
      mdIcon: timeSharp,
    },
    {
      title: 'Novosti',
      url: 'news',
      iosIcon: listOutline,
      mdIcon: listSharp,
    },
    {
      title: 'Q&A',
      url: 'qna',
      iosIcon: helpOutline,
      mdIcon: helpSharp,
    },
    {
      title: 'Čekiranje',
      url: 'checkin',
      iosIcon: qrCodeOutline,
    },
    {
      title: 'Kontakt',
      url: 'contact',
      iosIcon: callOutline,
      mdIcon: callSharp,
    },
    {
      title: 'Izlogujte se',
      url: '/logout',
      iosIcon: powerOutline,
      mdIcon: powerSharp
    }
  ];
  
  const path = window.location.pathname.split('/')[1];
  if (path !== undefined) {
    selectedIndex.value = appPages.findIndex((page) => page.title.toLowerCase() === path.toLowerCase());
  }
  const store = useStore()
  let notificationMessage = '';
  const registerWebPush = async () => {
            try {
                await Notification.requestPermission();

                const token = await getToken(messaging, { vapidKey: 'BAE1CTxw44IianS8VEqiqvNfQgjGhAHVcdpOzcdIhd37t6qk0wwVUE964LT08ZT08OFLJdM9K_cxItlCGSVHWcw' });
                if (token) {
                    console.log('FCM Token:', token);

                    store.dispatch('auth/addDeviceTokens', token)

                    onMessage(messaging, (payload) => {
                        console.log('Message received. ', payload);
                        new Notification(payload.notification.title, { body: payload.notification.body })
                    });
                } 
            }catch (error) {
                console.error('An error occurred while registering for push notifications:', error);
            }
        }

      const initializePushNotifications = () => {
        if (isPlatform('capacitor')) {

          setupNativePushNotifications();
        } else if (isPlatform('hybrid') || isPlatform('mobileweb') || isPlatform('desktop')) {

          registerWebPush();
        }
      }

    const setupNativePushNotifications = () => {

      PushNotifications.requestPermissions().then(result => {
        if (result.receive === 'granted') {

          PushNotifications.register();
        } else {
          console.log('Push notification permission not granted');
        }
      });

      PushNotifications.addListener('pushNotificationReceived', (notification) => {
        notificationMessage = `Push received: ${notification.title}`;
      });

      PushNotifications.addListener('pushNotificationActionPerformed', (notification) => {
        notificationMessage = `Notification action performed: ${notification.notification.data}`;
      });
    }
    onMounted(() => {
      initializePushNotifications();
    })

  </script>
  
  <style scoped>
  ion-menu ion-content {
    --background: var(--ion-item-background, var(--ion-background-color, #fff));
  }
  
  ion-menu.md ion-content {
    --padding-start: 8px;
    --padding-end: 8px;
    --padding-top: 20px;
    --padding-bottom: 20px;
  }
  
  ion-menu.md ion-list {
    padding: 20px 0;
  }
  
  ion-menu.md ion-note {
    margin-bottom: 30px;
  }
  
  ion-menu.md ion-list-header,
  ion-menu.md ion-note {
    padding-left: 10px;
  }
  
  ion-menu.md ion-list#inbox-list {
    border-bottom: 1px solid var(--ion-background-color-step-150, #d7d8da);
  }
  
  ion-menu.md ion-list#inbox-list ion-list-header {
    font-size: 22px;
    font-weight: 600;
  
    min-height: 20px;
  }
  
  ion-menu.md ion-list#labels-list ion-list-header {
    font-size: 16px;
  
    margin-bottom: 18px;
  
    color: #757575;
  
    min-height: 26px;
  }
  
  ion-menu.md ion-item {
    --padding-start: 10px;
    --padding-end: 10px;
    border-radius: 4px;
  }
  
  ion-menu.md ion-item.selected {
    --background: rgba(var(--ion-color-primary-rgb), 0.14);
  }
  
  ion-menu.md ion-item.selected ion-icon {
    color: var(--ion-color-primary);
  }
  
  ion-menu.md ion-item ion-icon {
    color: #616e7e;
  }
  
  ion-menu.md ion-item ion-label {
    font-weight: 500;
  }
  
  ion-menu.ios ion-content {
    --padding-bottom: 20px;
  }
  
  ion-menu.ios ion-list {
    padding: 20px 0 0 0;
  }
  
  ion-menu.ios ion-note {
    line-height: 24px;
    margin-bottom: 20px;
  }
  
  ion-menu.ios ion-item {
    --padding-start: 16px;
    --padding-end: 16px;
    --min-height: 50px;
  }
  
  ion-menu.ios ion-item.selected ion-icon {
    color: var(--ion-color-primary);
  }
  
  ion-menu.ios ion-item ion-icon {
    font-size: 24px;
    color: #73849a;
  }
  
  ion-menu.ios ion-list#labels-list ion-list-header {
    margin-bottom: 8px;
  }
  
  ion-menu.ios ion-list-header,
  ion-menu.ios ion-note {
    padding-left: 16px;
    padding-right: 16px;
  }
  
  ion-menu.ios ion-note {
    margin-bottom: 8px;
  }
  
  ion-note {
    display: inline-block;
    font-size: 16px;
  
    color: var(--ion-color-medium-shade);
  }
  
  ion-item.selected {
    --color: var(--ion-color-primary);
  }
  </style>
  
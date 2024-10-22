<template>
    <ion-router-outlet></ion-router-outlet>
</template>
<script>
import { IonRouterOutlet } from '@ionic/vue';
import { PushNotifications } from '@capacitor/push-notifications';
import { isPlatform } from '@ionic/vue'; // Ionic platform utility
import { messaging, getToken, firebase, onMessage } from "@/firebase"; 

export default {
    name: "Master",
    components: {
        IonRouterOutlet
    },
    data() {
        return { 
            notificationMessage: ''
        }
    },
    mounted() {
        this.registerWebPush();
    },
    methods: {
        async registerWebPush() {
            try {
                await Notification.requestPermission();

                const token = await getToken(messaging, { vapidKey: 'BAE1CTxw44IianS8VEqiqvNfQgjGhAHVcdpOzcdIhd37t6qk0wwVUE964LT08ZT08OFLJdM9K_cxItlCGSVHWcw' });
                if (token) {
                    console.log('FCM Token:', token);

                // Listen for messages
                    onMessage(messaging, (payload) => {
                        console.log('Message received. ', payload);
                        new Notification(payload.notification.title, { body: payload.notification.body })
                    });
                } 
            }catch (error) {
                console.error('An error occurred while registering for push notifications:', error);
            }
        }
    }
}
</script>
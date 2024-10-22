<template>
    <ion-page>
        <ion-header>
          <ion-toolbar>
            <ion-title>Izlogujem se...</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding"></ion-content>
      </ion-page>
</template>

<script>
import { mapActions } from 'vuex';
import { 
    IonPage,
    IonContent,
    IonToolbar,
    IonHeader,
    IonTitle
 } from '@ionic/vue';

export default {
    name: "Logout",
    mounted() {
        this.logout()
    },
    components: {
        IonPage,
        IonContent,
        IonToolbar,
        IonHeader,
        IonTitle
    },
    methods: {
        ...mapActions('auth', ['logout'])
    }
}
</script>
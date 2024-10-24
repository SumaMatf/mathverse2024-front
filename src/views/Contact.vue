<script lang="ts">
  import { IonIcon, IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonCard  } from '@ionic/vue';
  import { callOutline, mailOutline, logoIonic } from 'ionicons/icons';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonIcon, IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonCard },
    setup() {
      return { callOutline, mailOutline, logoIonic };
    },
  });
</script>

<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar style="--background:#220e0f">
          <ion-buttons slot="start">
            <ion-menu-button color="primary"></ion-menu-button>
          </ion-buttons>
          <ion-title>Kontakt</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content :fullscreen="true" style=" --background: url('/banner2.png') 0 0/100% 100% no-repeat;">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">{{ $route.params.id }}</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-card  style="padding: 30px; max-width: 400px; text-align: center;" class="ion-padding contact-card">
            <img src="../../public/suma.png" style="height: 200px; margin: 10px auto;" alt="">
            <br>
            <h2>KONTAKTIRAJTE NAS</h2>
            <div style="margin: 10px 0; vertical-align: center;" class="contact">
                <ion-icon :icon="callOutline" size="large" style="padding-right: 10px;"></ion-icon> <a href="tel:+381611234567" style="font-size: medium;">+381611234567</a>
            </div>
            <div style="margin: 10px 0; vertical-align: center;" class="contact">
                <ion-icon :icon="mailOutline" size="large" style="padding-right: 10px;"></ion-icon> <a href="mailto:suma.hrteam@gmail.com" style="font-size: medium;">suma.hrteam@gmail.com</a>
            </div>
            
            
        </ion-card>
        
        
      </ion-content>
    </ion-page>
  </template>

  <script>
  </script>
  
  <style scoped>
  .contact-card {
    display: block;
    justify-content: center;  /* Centers horizontally */
    align-items: center;      /* Centers vertically */
    margin: 40px auto;  
  }
  .contact {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>
  
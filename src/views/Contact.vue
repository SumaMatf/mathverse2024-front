<script setup lang="ts">
    import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCard} from '@ionic/vue';
</script>

<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button color="primary"></ion-menu-button>
          </ion-buttons>
          <ion-title>Kontakt</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">{{ $route.params.id }}</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-card style="padding: 30px;">
            <img src="../../public/suma.png" style="height: 200px;" alt="">
            <br>
            
        </ion-card>
        

        
      </ion-content>
    </ion-page>
  </template>

  <script>
  </script>
  
  <style scoped>
  </style>
  
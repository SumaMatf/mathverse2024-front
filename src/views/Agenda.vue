 
  <script setup lang="ts">
  import { IonTabs,
    IonTab,
    IonToolbar,
    IonTabBar,
    IonTabButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonLabel,
    IonIcon} from '@ionic/vue';
    import agenda24 from '../components/agenda/agenda24.vue';
    import agenda25 from '../components/agenda/agenda25.vue';
    import agenda26 from '../components/agenda/agenda26.vue';
    import agenda27 from '../components/agenda/agenda27.vue';

  
  </script>

<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar style="--background:#220e0f">
          <ion-buttons slot="start">
            <ion-menu-button color="primary"></ion-menu-button>
          </ion-buttons>
          <ion-title>Agenda</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content style=" --background: url('../../public/banner2.png') 0 0/100% 100% no-repeat;">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">{{ $route.params.id }}</ion-title>
          </ion-toolbar>
        </ion-header>
  
        <!--<ion-content>
          <AgendaTable></AgendaTable>
        </ion-content>-->
        <ion-tabs style="--ion-tab-bar-background:#311315; ">
    <ion-tab tab="tab24">
      <ion-content id="agenda-24" style=" --background: url('../../public/banner2.png') 0 0/100% 100% no-repeat;">
        <agenda24></agenda24>
      </ion-content>
    </ion-tab>
    <ion-tab tab="tab25">
      <ion-content id="agenda-25" style=" --background: url('../../public/banner2.png') 0 0/100% 100% no-repeat;">
        <agenda25></agenda25>
      </ion-content>
    </ion-tab>
    <ion-tab tab="tab26">
      <ion-content id="agenda-26" style=" --background: url('../../public/banner2.png') 0 0/100% 100% no-repeat;">
        <agenda26></agenda26>
      </ion-content>
    </ion-tab>
    <ion-tab tab="tab27">
      <ion-content id="agenda-27" style=" --background: url('../../public/banner2.png') 0 0/100% 100% no-repeat;">
        <agenda27></agenda27>
      </ion-content>
    </ion-tab>

    <ion-tab-bar slot="top">
      <ion-tab-button tab="tab24">
        <ion-label><h1>24.10.</h1></ion-label>
      </ion-tab-button>
      <ion-tab-button tab="tab25">
        <ion-label><h1>25.10.</h1></ion-label>
      </ion-tab-button>
      <ion-tab-button tab="tab26">
        <ion-label><h1>26.10.</h1></ion-label>
      </ion-tab-button>
      <ion-tab-button tab="tab27">
        <ion-label><h1>27.10.</h1></ion-label>
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
      </ion-content>
    </ion-page>
  </template>
 
  
  <style scoped>
  #container {
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  
  #container strong {
    font-size: 20px;
    line-height: 26px;
  }
  
  #container p {
    font-size: 16px;
    line-height: 22px;
    color: #8c8c8c;
    margin: 0;
  }
  
  #container a {
    text-decoration: none;
  }
  </style>
  
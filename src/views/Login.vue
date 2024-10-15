<template>
  <ion-app>
    <ion-content>
      <div class="loginBox" style="text-align: center;">
        <ion-label class="loginLabel">Ulogujte se</ion-label>
        <ion-list>
          <ion-item>
            <ion-label fixed>Korisničko ime</ion-label>
            <br>
            <ion-input v-model="email" type="text"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label fixed>Lozinka</ion-label>
            <br>
            <ion-input v-model="password" type="password"></ion-input>
          </ion-item>
        </ion-list>
        
        <ion-button @click="login">Ulogujte se</ion-button>
      </div>
    </ion-content>
  </ion-app>
</template>

<script setup lang="ts">
import {
    IonApp,
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
    IonInput,
    IonButton
  } from '@ionic/vue';
import {
    archiveOutline,
    archiveSharp,
    bookmarkOutline,
    bookmarkSharp,
    callOutline,
    callSharp,
    heartOutline,
    heartSharp,
    helpOutline,
    helpSharp,
    listOutline,
    listSharp,
    locate,
    locateOutline,
    mailOutline,
    mailSharp,
    paperPlaneOutline,
    paperPlaneSharp,
    qrCodeOutline,
    timeOutline,
    timeSharp,
    trashOutline,
    trashSharp,
    warningOutline,
    warningSharp,
  } from 'ionicons/icons';
import { ref } from 'vue';
import axios from 'axios';
import router from '../router/index';

const email = ref('');
const password = ref('');

const login = () => {
  if (!email.value || !password.value )  {
    console.log(email)
    console.log(password)
    alert('Molimo vas unesite email i password');
    return
  }

  axios.post('/login', { email: email.value, password: password.value })
    .then( (response) => {
      localStorage.setItem('jwt-token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      router.push({name: 'agenda'})
    })
    .catch( () => {
      alert("Invalid")
    })
}

</script>

<style scoped>
  .loginBox {
    width: 400px;
    height: 300px;
    margin: auto;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 30px;
    padding: 50px;
    margin-top: 200px;
  }

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

  ion-content {
    --background: url("../public/loginBanner.png");
  }

  .loginLabel {
    font-size: larger !important;
  }

  ion-input {
    background: #111111;
    border-radius: 10px !important;  
    color: white;

    --padding-bottom: 10px;
    --padding-end: 10px;
    --padding-start: 10px;
    --padding-top: 10px;

    margin-top: 10px;
    margin-bottom: 10px;
  }

  </style>
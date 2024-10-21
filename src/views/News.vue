<script setup>
    import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
    import NewsSingle from '../components/NewsSingle.vue';
    import NewsForm from '../components/NewsForm.vue';
</script>

<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button color="primary"></ion-menu-button>
          </ion-buttons>
          <ion-title>Novosti</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">{{ $route.params.id }}</ion-title>
          </ion-toolbar>
        </ion-header>

        <NewsForm></NewsForm>

        <!-- <div v-for="news in data">
          <NewsSingle :title="news.title" :date="news.created_at" :content="news.content"></NewsSingle>
        </div> -->

        <NewsSingle title="Test1" date="20-10-2024. 15:34:43" content="Lorem ipsum"></NewsSingle>
        <NewsSingle title="Test2" date="21-10-2024. 15:34:43" content="Lorem ipsum"></NewsSingle>
        <NewsSingle title="Test2" date="22-10-2024. 15:34:43" content="Lorem ipsum"></NewsSingle>

        
      </ion-content>
    </ion-page>
  </template>

  <script>
    import axios from 'axios';

    export default {
      data() {
        return {
          data: null,
        };
      },
      async mounted() {
        try {
          const response = await axios.get('articles');
          this.data = response.data;
          this.data.reverse();

          console.log(this.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      },
    };
  </script>
  
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
  
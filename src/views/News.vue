<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar style="--background:#220e0f">
          <ion-buttons slot="start">
            <ion-menu-button color="primary"></ion-menu-button>
          </ion-buttons>
          <ion-title>Novosti</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content :fullscreen="true" style=" --background: url('/banner2.png') 0 0/100% 100% no-repeat;" >
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">{{ $route.params.id }}</ion-title>
          </ion-toolbar>
        </ion-header>

        <NewsForm v-if="user && user.role.id == Role.Admin"></NewsForm>
        <ion-accordion-group v-if="articles.length" style="margin: 50px; --border-radius: 30px;">
          <NewsSingle v-for="article in articles" :key="article.id" :article="article"></NewsSingle>
        </ion-accordion-group>
        
      </ion-content>
    </ion-page>
  </template>

  <script>
  import { mapGetters, mapActions } from 'vuex';
  import Role from '@/classes/Role';
  import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonAccordionGroup } from '@ionic/vue';
  import NewsSingle from '../components/NewsSingle.vue';
  import NewsForm from '../components/NewsForm.vue';

  export default {
    data() {
      return {
        data: null,
        Role
      };
    },
    components: {
      IonButtons, 
      IonContent, 
      IonHeader, 
      IonMenuButton, 
      IonPage, 
      IonTitle, 
      IonToolbar, 
      NewsSingle, 
      NewsForm,
      IonAccordionGroup
    },
    computed: {
      ...mapGetters('articles', ['articles']),
      ...mapGetters('auth', ['user'])
    },
    mounted() {
      this.getArticles();
    },
    methods: {
      ...mapActions('articles', ['getArticles', 'addArticles'])
    }
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
  
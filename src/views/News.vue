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

        <NewsForm v-if="user.role.id == Role.Admin"></NewsForm>
        <NewsSingle v-for="article in articles" :key="article.id" :article="article"></NewsSingle>

        
      </ion-content>
    </ion-page>
  </template>

  <script>
  import { mapGetters, mapActions } from 'vuex';
  import Role from '@/classes/Role';
  export default {
    data() {
      return {
        data: null,
      };
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
  
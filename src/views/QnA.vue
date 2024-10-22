<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button color="primary"></ion-menu-button>
          </ion-buttons>
          <ion-title>QnA</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">{{ $route.params.id }}</ion-title>
          </ion-toolbar>
        </ion-header>
        
        <QnAFormGuest />

        <ion-accordion-group v-if="qnas">
          <QnASingle v-for="qna in qnas" :key="qna.id" :qna="qna" :authUser="user"></QnASingle>
        </ion-accordion-group>
        

      </ion-content>
    </ion-page>
    
</template>


<script>
  import QnAFormGuest from '@/components/QnAFormGuest.vue';
import QnASingle from '@/components/QnASingle.vue';
import {
    IonAccordion,
    IonContent,
    IonLabel,
    IonItem,
    IonAccordionGroup,
    IonButtons,
    IonHeader, 
    IonMenuButton, 
    IonPage, 
    IonTitle, 
    IonToolbar
  } from '@ionic/vue'
  
  import { mapActions, mapGetters } from 'vuex';
  
  export default {
    components: {
      IonContent,
      IonAccordionGroup,
      IonButtons,
      IonHeader, 
      IonMenuButton, 
      IonPage, 
      IonTitle, 
      IonToolbar,
      QnASingle,
      QnAFormGuest
    },
    computed: {
      ...mapGetters('auth', ['user']),
      ...mapGetters('qna', ['qnas']),
    },
    mounted() {
      this.getQnas()
    },
    methods: {
      ...mapActions('qna', ['getQnas']),
      showAnswerInAccordion(qna) {
        return qna.question && qna.answer;
      },
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

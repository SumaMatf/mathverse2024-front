<script setup>
    import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
    import QnAFormAdmin from '../components/QnAFormAdmin.vue';
    import QnAFormGuest from '../components/QnAFormGuest.vue';
    import QSingle from '../components/QSingle.vue';

    /*let value = JSON.parse(localStorage.getItem('user'));
    console.log(value);*/
    let role = 'admin';
    
</script>

<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button color="primary"></ion-menu-button>
          </ion-buttons>
          <ion-title>Odgovori</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">{{ $route.params.id }}</ion-title>
          </ion-toolbar>
        </ion-header>

        <QnAFormAdmin></QnAFormAdmin>
        
        <QSingle id="q1" @click="selectCard('q1')" :class="{ 'selected-card': selectedCard === 'q1' }"></QSingle>
        <QSingle id="q2" @click="selectCard('q2')" :class="{ 'selected-card': selectedCard === 'q2' }"></QSingle>
        <QSingle id="q3" @click="selectCard('q3')" :class="{ 'selected-card': selectedCard === 'q3' }"></QSingle>

        

      </ion-content>
    </ion-page>
    
</template>


<script>
    import axios from 'axios';
    import QnASingle from '../components/QnASingle.vue';

    export default {
    data() {
        return {
            selectedCard: null,
            data: null,
        };
    },
    methods: {
        selectCard(cardId) {
            this.selectedCard = cardId; // Set the clicked card as selected
        }
    },
    async mounted() {
        try {
        const response = await axios.get('questions');
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
    .selected-card {
    border: 2px solid rgb(150, 38, 41);
    background-color: rgba(150, 38, 41, 0.2);
    }

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

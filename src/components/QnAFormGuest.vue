<template>
    <ion-card>
        <h2 style="margin: 20px auto; text-align: center;">Postavite nam pitanje!</h2>
        <ion-list style="text-align:center" lines="none">
            <ion-item>
                <ion-input v-model="title" fill="outline" type="text"></ion-input>
            </ion-item>
            <ion-item>
                <ion-button @click="post" style="margin: auto; padding: 20px 0; font-size: large !important;" class = "postButton">Posaljite pitanje</ion-button>
            </ion-item>
        </ion-list>
    </ion-card>
    
</template>

<script lang='ts' setup>
    import { ref } from 'vue';
    import axios from 'axios';
    import router from '../router/index';   

    import {
        IonApp,
        IonPage,
        IonContent,
        IonIcon,
        IonCard,
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
        IonButton,
        IonTextarea
    } from '@ionic/vue';

    var user = localStorage.getItem('user');
    const post = () => {
        axios.post('/questions', { title: title.value, contributedBy: 1})
        .then( (response) => {
            alert("Added successfully")
        })
        .catch( () => {
            alert("Invalid")
        })
    }

    const title = ref('');
    const content = ref('');
</script>

<style scoped>
.postButton {
    --background: #88383b;
    --color: white;
    --border-radius: 10px;
    --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    --padding-start: 20px;
    --padding-end: 20px;
    --padding-top: 20px;
    --padding-bottom: 20px;
}
</style>
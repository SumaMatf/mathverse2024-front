<template>
    <ion-card>
        <ion-list>
            <ion-item>
                <ion-label>Naslov</ion-label>
            </ion-item>
            <ion-item>
                <ion-input v-model="title" fill="outline" type="text"></ion-input>
            </ion-item>
            <br />
            <ion-item>
                <ion-label>Tekst</ion-label>
            </ion-item>
            <ion-item>
                <ion-textarea v-model="content" fill="outline" type="text"></ion-textarea>
            </ion-item>
            <br />
            <ion-item>
                <ion-button @click="post">Posaljite odgovor</ion-button>
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

    const post = () => {
        axios.post('/answers', { title: title.value, content: content.value, user_id: 1})
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

</style>
<template>
    <ion-list lines="none">
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
            <ion-button @click="addArticleHandle">Objavite</ion-button>
        </ion-item>
    </ion-list>
</template>

<script>
import {
    IonItem,
    IonLabel,
    IonList,
    IonInput,
    IonButton,
    IonTextarea
} from '@ionic/vue';
import { mapActions } from 'vuex';
export default {
    name: "NewsForm",
    components: {
        IonItem,
        IonLabel,
        IonList,
        IonInput,
        IonButton,
        IonTextarea
    },
    data() {
        return {
            title: '',
            content: ''
        }
    },
    methods: {
        ...mapActions('articles', ['addArticle']),
        addArticleHandle() {
            this.addArticle({title: this.title, content: this.content})
        }
    }
}
</script>

<style scoped>
    ion-card {

    border: solid 1px rgba(0, 0, 0, 0.5);
    }
</style>
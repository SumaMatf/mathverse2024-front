<template>
  <ion-card style="margin: 30px; padding: 10px; border-radius: 10px;">
    <h2 style="margin: 20px auto; text-align: center;">Postavite nam pitanje!</h2>
    <ion-list style="text-align:center; --background: none;" lines="none">
      <ion-item>
        <ion-input v-model="title" fill="outline" type="text"></ion-input>
      </ion-item>
      <ion-item>
        <ion-button @click="addQnaHandle" style="margin: auto; padding: 20px 0; font-size: large !important;" class="postButton">Pošaljite pitanje</ion-button>
      </ion-item>
    </ion-list>
  </ion-card> 
</template>

<script>
import {
    IonCard,
    IonItem,
    IonList,
    IonInput,
    IonButton,
} from '@ionic/vue';

import { mapActions } from 'vuex';

export default {
  name: "QnAFormGuest",
  data() {
    return {
      title: ''
    }
  },
  components: {
    IonItem,
    IonList,
    IonInput,
    IonButton,
  },
  methods: {
    ...mapActions('qna', ['addQna']),
    addQnaHandle() {
      this.addQna({title: this.title})
      this.title = ''
    }
  }
}
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
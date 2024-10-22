<template>
        <ion-list lines="none">
            <ion-item>
                <ion-label>Odgovor</ion-label>
            </ion-item>
            <ion-item>
                <ion-textarea v-model="content" fill="outline" type="text"></ion-textarea>
            </ion-item>
            <br />
            <ion-item>
              <ion-button @click.prevent="answerQuestionHandle" style="padding: 20px 0; font-size: large !important;" class="postButton">Pošaljite odgovor</ion-button>
            </ion-item>
        </ion-list>
    
</template>

<script>
import {
    IonItem,
    IonLabel,
    IonList,
    IonButton,
    IonTextarea
} from '@ionic/vue';
import { mapActions } from 'vuex';
export default {
  name: "QnAFormAdmin",
  components: {
    IonItem,
    IonLabel,
    IonList,
    IonButton,
    IonTextarea
  },
  data() {
    return {
      content: ''
    }
  },
  props: {
    qna: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions('qna', ['answerQuestion']),
    answerQuestionHandle() {
      if (!this.content) {
        alert("Unesite odgovor");
        return;
      }
      this.answerQuestion({question_id: this.qna.id, content: this.content})
      this.content = ''
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
  --padding-start: 15px;
  --padding-end: 15px;
  --padding-top: 15px;
  --padding-bottom: 15px;
}
</style>
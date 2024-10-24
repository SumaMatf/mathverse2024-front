<template>
        <ion-accordion v-if="authUser && (authUser.role.id == Role.Admin || (authUser.role.id == Role.Participant && qna.answer))" >
            <ion-item slot="header" style="background-color: #220e0f;">
              <ion-label>{{ qna.title }}</ion-label>
            </ion-item>
            <div v-if="qna.answer" class="ion-padding" slot="content" style="--ion-background-color: #060606;">{{qna.answer.content}}</div>
            <div v-else-if="authUser.role.id == Role.Admin" class="ion-padding" slot="content">
                <QnAFormAdmin :qna="qna"/>
            </div>
        </ion-accordion>
</template>

<script>
import {
    IonAccordion,
    IonItem,
    IonLabel
} from '@ionic/vue'

import Role from '@/classes/Role';
import QnAFormAdmin from './QnAFormAdmin.vue';

export default {
    name: 'QnASingle',
    props: {
        qna: {
            type: Object,
            required: true
        },
        authUser: {
            type: Object,
            required:true
        }
    },
    components: {
        IonAccordion,
        IonItem,
        IonLabel,
        QnAFormAdmin
    },
    data() {
        return {
            Role
        }
    }
}
</script>

<style scoped>
ion-card {
    font-size: 16px;
    margin: 30px;
    padding: 20px;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.1);
    border: solid 1px rgba(0, 0, 0, 0.5);
}
h2 {
    color: #ec9924;
}
h4 {
    color: #7e3513;
}

</style>
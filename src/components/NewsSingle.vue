<template>
    <ion-accordion>
        <ion-item slot="header">
          <ion-label><h2><b>{{ article.title }}</b></h2></ion-label>
          <br>
          <span>{{ article.created_at }}</span>
        </ion-item>
        <div class="ion-padding" v-html="article.content" slot="content"></div>
    </ion-accordion>
</template>

<script>
import {
    IonAccordion,
    IonItem,
    IonLabel
} from '@ionic/vue'

import Role from '@/classes/Role';


export default {
name: 'QnASingle',
props: {
    article: {
        type: Object,
        required: true
    }
},
components: {
    IonAccordion,
    IonItem,
    IonLabel,
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
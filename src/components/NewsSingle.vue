<template>
    <ion-card>
        <h2><b>{{ article.title }}</b></h2>
        <h4><b>{{ article.created_at }}</b></h4>
        {{ article.content }}
    </ion-card>
        
</template>


<script>
import { IonCard } from '@ionic/vue';

export default{
    props: {
        article: {
            type: Object,
            required: true,
        }
    },
    components: {
        IonCard
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
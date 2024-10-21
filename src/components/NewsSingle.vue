<template>
    <ion-card>
        <h2><b>{{ title }}</b></h2>
        <h4><b>{{ date }}</b></h4>
        {{ content }}
    </ion-card>
        
</template>


<script>
    import { defineComponent } from 'vue';

    export default defineComponent({
    // Define props
    props: {
        title: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
        content: {
            type: String,
            required: true,
        }
    },
    // Composition API - setup function
    setup(props) {
        // You can access props here
        const date = new Date(props.date).toLocaleDateString('pt-BR',{ year: 'numeric', month: '2-digit', day: '2-digit'}).split( '/' ).reverse( ).join( '-' );
        const time = new Date(props.date).toLocaleTimeString('pt-BR',{ hour: '2-digit', minute: '2-digit' });
        return {
        title: props.title,
        date: date + " " + time,
        content: props.content,
        };
    },
    });
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
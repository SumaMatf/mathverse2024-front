<template>
    Izlogujem se...
</template>

<script>
import { mapActions } from 'vuex';


export default {
    name: "Logout",
    mounted() {
        this.logout()
    },
    methods: {
        ...mapActions('auth', ['logout'])
    }
}
</script>
<script setup lang="ts">
import QnAFormAdmin from './QnAFormAdmin.vue';
import QnAFormGuest from './QnAFormGuest.vue';
</script>

<template>
    <QnAFormAdmin v-if="JSON.parse(localStorage.getItem('user').role.name) == 'admin'">
    <QnAFormGuest v-if="JSON.parse(localStorage.getItem('user').role.name) == 'guest'">
</template>
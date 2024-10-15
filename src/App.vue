<template>
  <router-view></router-view>
</template>
  
<script setup lang="ts">
  const path = window.location.pathname.split('folder/')[1];
  if (path !== undefined) {
    selectedIndex.value = appPages.findIndex((page) => page.title.toLowerCase() === path.toLowerCase());
  }
</script>
  
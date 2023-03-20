<script setup>
import { useRouter, RouterLink, RouterView } from 'vue-router'
import TheNav from './components/TheNav.vue'

// import HelloWorld from './components/HelloWorld.vue'

const router = useRouter();
</script>

<template>
  <header>
    <TheNav></TheNav>
  </header>

  <RouterView />
</template>

<style scoped>

</style>

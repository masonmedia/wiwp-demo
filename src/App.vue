<script setup>
import { useRouter, RouterLink, RouterView } from 'vue-router'
import TheNav from './components/TheNav.vue'

// import HelloWorld from './components/HelloWorld.vue'

const router = useRouter();
</script>

<template>
  <div class="overflow-hidden">
  <header>
    <TheNav></TheNav>
  </header>

  <router-view
  v-slot="{ Component }">
    <transition 
    name="slide-fade"
    mode="out-in">
    <!-- <transition 
    mode="out-in"
    @before-enter="beforeEnter"
    @enter="enter"
    @leave="leave"> -->
      <component :is="Component" :key="$route.fullPath" />
    </transition>
  </router-view>
  </div>
</template>

<style scoped>

</style>

<template>
  <div
    class="flex flex-col lg:flex-row h-screen bg-[#F0F2F5]"
    :style="{ fontFamily: 'Prompt, sans-serif' }"
  >
    <!-- Sidebar -->
    <div class="w-full lg:w-1/5 text-white">
      <Sidebar />
    </div>

    <router-view />

    <!-- Body -->
    <!-- <div class="w-full lg:w-3/5 p-4 overflow-auto">
      <Body msg="แดชบอร์ด" />
    </div> -->

    <!-- Map -->
    <!-- <div class="w-full lg:w-2/5">
      <Map />
    </div> -->
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
// import Body from './components/Body.vue'
// import Map from './components/Map.vue'
import { useRoute } from 'vue-router';
</script>

<style scoped>
body {
  font-family: 'Prompt', sans-serif;
}
</style>

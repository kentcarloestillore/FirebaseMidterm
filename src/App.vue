<script setup>
import { RouterView } from 'vue-router'
import SideBar from './views/SideBar.vue';
</script>

<template>
  <div class="flex mx-auto">
    <div class="w-[20vh]">
      <SideBar />
    </div>
    <div>
      <RouterView />
    </div>
    
  </div>

  
</template>

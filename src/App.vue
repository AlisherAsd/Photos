<script setup lang="ts">
import { onMounted } from 'vue';
import Navbar from './components/Navbar.vue';
import store from './store';

function fetchTodo() {
  store.dispatch('fetchPhotos');
}

onMounted(() => {
  fetchTodo();
});


</script>

<template>
  <div class="bg-gray-800 min-h-300">
    <div class="p-4">
      <Navbar />
    <div class="">
      <RouterView />
    </div>
  </div>
  </div>
</template>
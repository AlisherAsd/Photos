<script setup lang="ts">
import Photo from '../components/photo/Photo.vue';
import Loading from '../components/Loading.vue';
import store from '../store';
</script>

<template>
    <div class="flex flex-wrap gap-5 justify-center">
        <Loading v-if="store.getters.getIsLoading"/>
        <Photo v-for="photo in store.getters.getAllPhotos" :photo="photo" :key="photo.id"/>
    </div>
</template>
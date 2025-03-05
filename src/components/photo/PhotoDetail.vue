<template>
    <div>
        <div v-if="store.getters.getPhotoById" class="flex flex-col items-center">
            <div class="bg-white w-90">
                <img class="w-90 pointer-cursor"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSWo8UA5AM-0F_JPwbXEc5KBrHnBSFE8YvCg&s" />
                <div class="flex flex-col items-center p-8">
                    <div class="p-3">
                        <a class="text-lg font-bold">{{ store.getters.getPhotoById.title }}</a>
                    </div>
                    <div class="w-90 p-10">
                        <a class="text-sm"> {{ store.getters.getPhotoById.body }}</a>
                    </div>
                </div>
            </div>
        </div>
        <Loading v-else />
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import store from '../../store';
import Loading from '../Loading.vue';

const route = useRoute();

onMounted(() => {
    const photoId: number = Number(route.params.id);
    store.commit('setCurrentPhotoId', photoId)
});

</script>
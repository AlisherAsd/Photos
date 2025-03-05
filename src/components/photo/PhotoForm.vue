<template>
    <div class="flex justify-center">
        <div class="flex flex-col w-120 gap-3 p-7">
            <input v-model="title" type="text" class="p-2 bg-white" placeholder="Название фотографии" />
            <input v-model="body" type="text" class="p-2 bg-white" placeholder="Описание фотографии" />
            <input class="bg-white p-2" type="file"/>
            <button @click="handleAddPhoto" class="bg-white p-2">Добавить</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import store from '../../store';

const title = ref<string>('');
const body = ref<string>('');

function handleAddPhoto() {
    let photo = {
        id: Date.now(),
        title: title.value,
        body: body.value,
    }
    store.commit('addPhoto', photo);
    title.value = '';
    body.value = '';
}

</script>
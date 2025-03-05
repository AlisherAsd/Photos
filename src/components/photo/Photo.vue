<script setup lang="ts">
import type { IPhoto } from '../../shared/types/IPhoto';

defineProps<{
    photo: IPhoto
}>();

</script>

<template>
    <div class="flex flex-col w-80 bg-white">
        <RouterLink :to="`/photo_detail/${photo.id}`">
            <img class="w-80 pointer-cursor" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSWo8UA5AM-0F_JPwbXEc5KBrHnBSFE8YvCg&s" />
        </RouterLink>
        <div class="flex flex-col items-center">
            <div class="w-60 p-3">
                <a class="text-lg font-bold">{{ photo.title }}</a>
            </div>
            <div class="w-60 p-3">
                <a class="text-sm">{{ photo.body }}</a>
            </div>
        </div>
    </div>
</template>

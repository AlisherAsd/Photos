<template>
    <div class="flex gap-2 justify-center p-10">
        <RouterLink to="/" class="px-10 py-2 text-white" :class="{'bg-gray-900': true}">Main</RouterLink>
        <RouterLink to="/photos" class="bg-gray-900 px-10 py-2 text-white">Photos</RouterLink>
        <RouterLink to="/add_photo" class="bg-gray-900 px-10 py-2 text-white">Create</RouterLink>
    </div>
</template>

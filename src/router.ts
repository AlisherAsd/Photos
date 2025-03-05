import { createMemoryHistory, createRouter } from 'vue-router'

import PhotosPage from './page/PhotosPage.vue'
import MainPages from './page/MainPages.vue'
import PhotoDetail from './components/photo/PhotoDetail.vue'
import PhotoForm from './components/photo/PhotoForm.vue'

const routes = [
    { path: '/', component: MainPages },
    { path: '/photos', component: PhotosPage },
    { path: '/add_photo', component: PhotoForm },
    { path: '/photo_detail/:id', component: PhotoDetail }
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})
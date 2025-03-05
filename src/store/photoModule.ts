import axios from "axios";
import type { IPhoto } from "../shared/types/IPhoto"
import type { IPhotoPayload } from "../shared/types/IPhotoPayload";

export default {
    state() {
        return {
            photos: [],
            isLoading: true,
            currentPhoto: null,
        }
    },
    getters: {
        getAllPhotos(state: IPhotoPayload) {
            return state.photos;
        },
        getIsLoading(state: IPhotoPayload) {
            return state.isLoading;
        },
        getPhotoById(state: IPhotoPayload) {
            return state.photos.find(photo => photo.id === state.currentPhoto);
        }
    },
    mutations: {
        setPhotos(state: IPhotoPayload, payload: IPhoto[]) {
            state.photos = payload;
        },
        setLoading(state: IPhotoPayload, payload: boolean) {
            state.isLoading = payload;
        },
        addPhoto(state: IPhotoPayload, payload: IPhoto) {
            state.photos.push(payload);
        },
        setCurrentPhotoId(state: IPhotoPayload, payload: number) {
            state.currentPhoto = payload;
        }
    },
    actions: {
        fetchPhotos(context: any) {
            setTimeout(() => {
                axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
                    .then(response => context.commit('setPhotos', response.data))
                    .finally(() => {
                        context.commit('setLoading', false)
                    })
            }, 1000);
        }
    },
}
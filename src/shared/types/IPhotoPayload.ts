import type { IPhoto } from "./IPhoto";

export interface IPhotoPayload {
    photos: IPhoto[],
    isLoading: boolean,
    currentPhoto: number | null,
}
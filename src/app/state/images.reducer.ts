import { createReducer, on } from '@ngrx/store';
import {retrievedUrlList} from "./images.actions";

export interface UrlsState {
  imageUrls: string[]
}

const initialUrlsState: UrlsState = {
  imageUrls: []
}
export const initialState: string[] = []

export const imagesReducer = createReducer(
  initialState,
  on(retrievedUrlList, (state,  {imageUrls}) => imageUrls || [])
);

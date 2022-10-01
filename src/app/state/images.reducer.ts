import { createReducer, on } from '@ngrx/store';
import {retrievedUrlList} from "./images.actions";

export const initialState: string[] = []

export const imagesReducer = createReducer(
  initialState,
  on(retrievedUrlList, (state,  {imageUrls}) => imageUrls || [])
);

import { createReducer, on } from '@ngrx/store';
import {retrievedUrlList} from "../actions/images.actions";

export const initialState: string[] = []

export const imagesReducer = createReducer(
  initialState,
  on(retrievedUrlList, (_,  {imageUrls}) => imageUrls)
);

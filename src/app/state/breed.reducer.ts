import {combineReducers, createReducer, on} from '@ngrx/store';

import { retrievedBreedList } from './breed.actions';
import { Breed } from '../breed-list/breed.model';
import {BreedsAndImages} from "./state.model"
import { submitForm } from './form.actions';
import {retrievedUrlList} from "./images.actions";
import {imagesReducer} from "./images.reducer"
import {formReducer} from "./form.reducer"

export interface BreedState {
  breed: Breed[]
}

const initialFormState: BreedState = {
  breed: []
}
export const initialState: Breed[] = []//BreedsAndImages = {breeds: [], form: {}, images: []};

export const breedReducer = createReducer(
  initialState,
  on(retrievedBreedList, (state,  {breeds}) => breeds || []),
);

/*
export const combinedReducer = combineReducers({
  "breeds": breedReducer,
  "form": formReducer,
  "images": imagesReducer
},
  {
    "breeds": [],
    "form": {},
    "images": []
  })
*/

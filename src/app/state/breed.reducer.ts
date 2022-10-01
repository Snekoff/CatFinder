import { createReducer, on } from '@ngrx/store';

import { retrievedBreedList } from './breed.actions';
import { Breed } from '../breed-list/breed.model';
import {BreedsAndImages} from "./state.model"
import { submitForm } from './form.actions';

export const initialState: Breed[] = []//BreedsAndImages = {breeds: [], form: {}};

export const breedReducer = createReducer(
  initialState,
  on(retrievedBreedList, (state,  {breeds}) => breeds || [])
);

import {createReducer, on} from '@ngrx/store';

import { retrievedBreedList } from '../actions/breed.actions';
import { Breed } from '../../breed-list/breed.model';

export const initialState: Breed[] = []

export const breedReducer = createReducer(
  initialState,
  on(retrievedBreedList, (state,  {breeds}) => breeds || []),
);

import { createAction, props } from '@ngrx/store';
import { Breed } from '../breed-list/breed.model';
import {breedReducer} from "./breed.reducer";

export const retrievedBreedList = createAction(
  '[Breed List/API] Retrieve Breeds Success',
  props<{breeds: Breed[]}>()
);

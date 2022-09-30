import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Breed } from '../breed-list/breed.model';

export const selectBreeds = createFeatureSelector<ReadonlyArray<Breed>>('breed');

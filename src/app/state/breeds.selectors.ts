import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Breed } from '../breed-list/breed.model';

export const selectBreeds = createFeatureSelector<Array<Breed>>('breeds');

export const selectForm = createFeatureSelector<any>('form');

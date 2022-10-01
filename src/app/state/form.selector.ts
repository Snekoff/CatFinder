import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Breed } from '../breed-list/breed.model';


export const selectForm = createFeatureSelector<any>('form');

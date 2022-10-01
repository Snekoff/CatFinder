import { createSelector, createFeatureSelector } from '@ngrx/store';

export const selectImages = createFeatureSelector<Array<string>>('imageUrls');


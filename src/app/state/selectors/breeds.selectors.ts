import { createFeatureSelector } from '@ngrx/store';
import { Breed } from '../../breed-list/breed-list.types';

export const selectBreeds = createFeatureSelector<Array<Breed>>('breeds');

import { createFeatureSelector } from '@ngrx/store';
import { Breed } from '../../breed-list/breed.model';

export const selectBreeds = createFeatureSelector<Array<Breed>>('breeds');

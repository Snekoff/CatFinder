import {createFeatureSelector} from '@ngrx/store';

export const selectImages = createFeatureSelector<Array<any>>('imageUrls');


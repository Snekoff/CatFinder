import {createSelector, createFeatureSelector, Store} from '@ngrx/store';
import {state} from "@angular/animations";

export const selectImagesState = (state: any) => state.urlsState
export const selectImages = createFeatureSelector<Array<any>>('imageUrls');


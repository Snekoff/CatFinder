import {createAction, props} from '@ngrx/store';
import {Breed} from "../breed-list/breed.model";

export const submitForm = createAction(
  '[Form Element] Submit Form',
  props<{form: any}>()
);

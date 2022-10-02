import {createAction, props} from '@ngrx/store';

export const submitForm = createAction(
  '[Form Element] Submit Form',
  props<{form: any}>()
);

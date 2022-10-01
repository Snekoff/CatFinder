import { createReducer, on } from '@ngrx/store';
import { submitForm } from './form.actions';

export const initialState = {};

export const formReducer = createReducer(
  initialState,
  on(submitForm, (state,  {form}) => form)
);

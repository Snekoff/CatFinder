import { createReducer, on } from '@ngrx/store';
import { submitForm } from './form.actions';

export const initialState = {disabled: false};

export const formReducer = createReducer(
  initialState,
  on(submitForm, (state) =>  state)
);

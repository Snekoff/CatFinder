import { createAction, props } from '@ngrx/store';

export const retrievedUrlList = createAction(
  '[string List/API] Retrieve Breeds Success',
  props<{imageUrls: string[]}>()
);

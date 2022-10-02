import { createAction, props } from '@ngrx/store';

export const retrievedUrlList = createAction(
  '[string List/API] Retrieve Urls Success',
  props<{imageUrls: any[]}>()
);

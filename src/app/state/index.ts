import { ActionReducerMap } from "@ngrx/store";
import { formReducer, FormState } from "./form.reducer";
import { breedReducer, BreedState } from "./breed.reducer";
import {imagesReducer, UrlsState} from "./images.reducer";
import {retrievedUrlList} from "./images.actions";

interface AppState {
  formState: FormState,
  breedState: BreedState,
  urlsState: UrlsState
}

export const reducers: ActionReducerMap<AppState> = {
  formState: formReducer,
  breedState: breedReducer,
  urlsState: imagesReducer
};

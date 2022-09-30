import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CatImagesComponent } from './cat-images/cat-images.component';
import { ControlFormComponent } from './control-form/control-form.component';

import { StoreModule } from '@ngrx/store';
import { formReducer } from './state/form.reducer';


import { HttpClient, HttpClientModule } from '@angular/common/http';
import { breedReducer } from './state/breed.reducer';
import { BreedListComponent } from './breed-list/breed-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CatImagesComponent,
    ControlFormComponent,
    BreedListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ form: formReducer, breed: breedReducer }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

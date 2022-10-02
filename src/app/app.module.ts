import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CatImagesComponent } from './cat-images/cat-images.component';

import { StoreModule } from '@ngrx/store';
import { formReducer } from './state/reducers/form.reducer';

import { HttpClientModule } from '@angular/common/http';
import {breedReducer} from './state/reducers/breed.reducer';
import { BreedListComponent } from './breed-list/breed-list.component';

import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from "@angular/material/divider";
import {imagesReducer} from "./state/reducers/images.reducer";
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    CatImagesComponent,
    BreedListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot({form: formReducer, breeds: breedReducer, imageUrls: imagesReducer,}),
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

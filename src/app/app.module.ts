import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CatImagesComponent } from './cat-images/cat-images.component';
import { ControlFormComponent } from './control-form/control-form.component';

import { StoreModule } from '@ngrx/store';
import { formReducer } from './state/form.reducer';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import {breedReducer} from './state/breed.reducer';
import { BreedListComponent } from './breed-list/breed-list.component';

import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from "@angular/material/divider";
import {imagesReducer} from "./state/images.reducer";
import {MatSidenavModule} from '@angular/material/sidenav';

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
    StoreModule.forRoot({form: formReducer, breeds: breedReducer, imageUrls: imagesReducer}),
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

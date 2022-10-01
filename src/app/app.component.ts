import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectBreeds } from './state/breeds.selectors';
import { retrievedBreedList } from './state/breed.actions';
import { BreedsService } from './breed-list/breeds.service';
import {Observable} from "rxjs";
import {FormArray, FormBuilder, Validators} from "@angular/forms";
import {submitForm} from "./state/form.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cat-finder';

  breeds$ = this.store.select(selectBreeds);
  //form$: Observable<any>

  constructor(
    private breedService: BreedsService,
    private store: Store,
    private fb: FormBuilder
  ) {
    //this.form$ = store.select('form');
  }

  ngOnInit() {
    this.breedService
      .getBreeds()
      .subscribe((breeds) => this.store.dispatch(retrievedBreedList( {breeds} )));
  }


  // TODO: add validators https://angular.io/guide/form-validation

  filters = this.fb.group({
    breedsControl: this.fb.array([
      this.fb.control("All Breeds")
    ]),
    amountOfPictures: ['10', Validators.required]
  })

  get breeds() {
    return this.filters.get("breedsControl") as FormArray;
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.store.dispatch(submitForm());
    console.warn(this.filters.value);
  }
}

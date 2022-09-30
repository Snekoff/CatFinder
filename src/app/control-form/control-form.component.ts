import { Component, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import { submitForm } from '../state/form.actions';

@Component({
  selector: 'app-control-form',
  templateUrl: './control-form.component.html',
  styleUrls: ['./control-form.component.css']
})
export class ControlFormComponent implements OnInit {
  form$: Observable<any>
  // TODO: add validators https://angular.io/guide/form-validation

  filters = this.fb.group({
    breeds: this.fb.array([
      this.fb.control("All Breeds")
    ]),
    amountOfPictures: ['', Validators.required]
  })

  constructor(private fb: FormBuilder, private store: Store<{ form: any }>) {
    this.form$ = store.select('form');

  }

  ngOnInit(): void {
    this.addBreed("breed1");
    this.addBreed("breed2");
  }

  get breeds() {
    return this.filters.get("breeds") as FormArray;
  }

  // TODO add AllBreads option
  addBreed(state: string) {
    this.breeds.push(this.fb.control(state));
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.store.dispatch(submitForm());
    console.warn(this.filters.value);
  }

}



//https://rxjs.dev/guide/overview
//https://ngrx.io/guide/store
//https://angular.io/guide/reactive-forms#validating-form-input


//https://ngrx.io/guide/store/walkthrough

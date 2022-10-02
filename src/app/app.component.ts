import {Component} from '@angular/core';
import {Store} from '@ngrx/store';

import {selectBreeds} from './state/selectors/breeds.selectors';
import {retrievedBreedList} from './state/actions/breed.actions';
import {BreedsService} from './breed-list/breeds.service';

import {Observable} from "rxjs";
import {FormArray, FormBuilder, Validators} from "@angular/forms";

import {submitForm} from "./state/actions/form.actions";
import {Breed} from './breed-list/breed.model';
import {selectForm} from "./state/selectors/form.selector";
import {retrievedUrlList} from "./state/actions/images.actions";
import {CatImageService} from "./cat-images/cat-image.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cat-finder';

  breeds$ = this.store.select(selectBreeds);
  form$ = this.store.select(selectForm);
  form!: Observable<any>

  filters = this.fb.group({
    breedsControl: this.fb.array([
      this.fb.control("All Breeds")
    ]),
    amountOfPictures: ['10', Validators.required]
  })

  constructor(
    private breedService: BreedsService,
    private store: Store,
    private fb: FormBuilder,
    private imageService: CatImageService
  ) {
  }

  ngOnInit() {
    this.breedService
      .getBreeds()
      .subscribe((breeds) => this.store.dispatch(retrievedBreedList({breeds})))
  }

  get breeds() {
    return this.filters.get("breedsControl") as FormArray;
  }

  onSubmit() {
    this.store.dispatch(submitForm({form: this.filters}));
    this.imageService
      .getImagesUrl()
      .subscribe((imageUrls) => this.store.dispatch(retrievedUrlList({imageUrls})));
  }

  onBreedsLoad(item: { breeds: Array<Breed> }): Array<Breed> {
    return item.breeds;
  }

  onChangeMatFetchBreeds(breedsArr: Array<string>) {
    let breedsControlArr = <FormArray>this.filters.controls["breedsControl"];
    breedsControlArr.controls[0].patchValue(breedsArr);
  }
}

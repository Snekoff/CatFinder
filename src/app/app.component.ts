import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectBreeds } from './state/selectors/breeds.selectors';
import { retrievedBreedList } from './state/actions/breed.actions';
import { BreedsService } from './breed-list/breeds.service';

import { submitForm } from "./state/actions/form.actions";

import { retrievedUrlList } from "./state/actions/images.actions";
import { CatImageService } from "./cat-images/cat-image.service";
import { selectImages } from "./state/selectors/images.selector";
import { tap } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cat-finder';

  breeds$ = this.store.select(selectBreeds);
  imageUrlObjs$ = this.store.select(selectImages);

  constructor(
    private readonly store: Store,
    private readonly breedService: BreedsService,
    private readonly imageService: CatImageService
  ) {
  }

  ngOnInit() {
    this.fetchBreeds();
  }

  breedsFilterChanges({ breedIds, count }: any) {
    this.store.dispatch(submitForm({form: { breedIds, count }}));
    this.fetchImages(breedIds, count)
  }

  private fetchBreeds() {
    this.breedService
      .getBreeds()
      .subscribe((breeds) => this.store.dispatch(retrievedBreedList({breeds})))
  }

  private fetchImages(breedIds: string[], count: number) {
    this.imageService
      .getImagesUrl(breedIds, count)
      .subscribe((imageUrls) => this.store.dispatch(retrievedUrlList({imageUrls})));
  }
}

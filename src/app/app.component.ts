import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectBreeds } from './state/breeds.selectors';
import { retrievedBreedList } from './state/breed.actions';
import { BreedsService } from './breed-list/breeds.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cat-finder';

  breeds$ = this.store.select(selectBreeds);

  onChoose(breedId: string) {

  }

  constructor(
    private breedService: BreedsService,
    private store: Store
  ) {

  }

  ngOnInit() {
    this.breedService
      .getBreeds()
      .subscribe((breeds) => this.store.dispatch(retrievedBreedList( breeds )));
  }
}

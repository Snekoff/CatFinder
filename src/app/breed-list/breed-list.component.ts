import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import {Breed} from './breed.model';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-breed-list',
  templateUrl: './breed-list.component.html',
  styleUrls: ['./breed-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreedListComponent {

  @Input() breeds: Array<Breed> = [];
  @Output() choose = new EventEmitter<Array<string>>();
  breedsC = new FormControl(['All breeds']);
  breedsStringArr: Array<string> = [];

  constructor() {
  }

  onChangeMat(value: Array<string> | null) {
    if (value) this.choose.emit(value);
  }

  reformatBreeds() {
    this.breedsStringArr = [];
    this.breedsStringArr.push("All breeds");
    this.breeds.map((breed) => this.breedsStringArr.push(breed.name));
  }

  ngOnChanges() {
    this.reformatBreeds()
  }

}

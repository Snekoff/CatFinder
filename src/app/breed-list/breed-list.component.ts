import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, OnInit, AfterViewInit} from '@angular/core';
import {Breed} from './breed.model';
import {FormControl} from '@angular/forms';
import {Observable, pipe} from 'rxjs';

@Component({
  selector: 'app-breed-list',
  templateUrl: './breed-list.component.html',
  styleUrls: ['./breed-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreedListComponent  {

  @Input() breeds: Array<Breed> = [];
  @Output() choose = new EventEmitter<string>();
  breedsC = new FormControl(['All breeds']);
  breedsStringArr: Array<string | undefined> = [];

  constructor() {
    setTimeout(
      () => this.reformatBreeds(), 500
    )

  }

  reformatBreeds() {
    this.breedsStringArr.push("All breeds");
    this.breeds.map((breed)=>this.breedsStringArr.push(breed.name));
    console.log(this.breedsStringArr);
  }

}

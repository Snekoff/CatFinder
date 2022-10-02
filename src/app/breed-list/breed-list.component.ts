import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit,
  AfterViewInit,
  SimpleChange, SimpleChanges
} from '@angular/core';
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
  @Output() choose = new EventEmitter<Array<string>>();
  breedsC = new FormControl(['All breeds']);
  breedsStringArr: Array<string> = [];

  constructor() {
  }

  onChangeMat(value: Array<string> | null) {
    if(value) this.choose.emit(value);
  }

  reformatBreeds() {
    this.breedsStringArr = [];
    this.breedsStringArr.push("All breeds");
    this.breeds.map((breed)=>this.breedsStringArr.push(breed.name));
    console.log("this.breedsStringArr",this.breedsStringArr);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.reformatBreeds()
  }

}

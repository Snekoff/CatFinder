import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Breed } from './breed.model';

@Component({
  selector: 'app-breed-list',
  templateUrl: './breed-list.component.html',
  styleUrls: ['./breed-list.component.css']
})
export class BreedListComponent {

  @Input() breeds: ReadonlyArray<Breed> = [];
  @Output() choose = new EventEmitter<string>();

}

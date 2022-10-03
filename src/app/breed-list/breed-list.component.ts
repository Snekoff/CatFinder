import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges, OnInit,
  Output
} from '@angular/core';
import {Breed} from './breed.model';
import {MatSelectChange} from "@angular/material/select";
import {Observable, startWith} from "rxjs";
import {map} from "rxjs/operators";

const ALL_BREADS = "All breeds";

@Component({
  selector: 'app-breed-list',
  templateUrl: './breed-list.component.html',
  styleUrls: ['./breed-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreedListComponent implements OnInit {
  @Input() breeds$!: Observable<Breed[]>;

  @Output() choose = new EventEmitter<string[]>();

  model$!: Observable<string[]>;

  constructor() {
  }

  ngOnInit() {
    this.model$ = this.breeds$.pipe(
      map((breeds) => {
        return [ALL_BREADS, ...breeds.map((item) => item.name)];
      }),
      startWith([])
    );
  }
}

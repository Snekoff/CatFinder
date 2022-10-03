import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { Breed, BreedList } from './breed-list.types';
import { Observable, startWith } from "rxjs";
import { map } from "rxjs/operators";
import { FormBuilder, Validators } from "@angular/forms";

export const ALL_BREADS: BreedList = {
  id: 'all_breads',
  name: 'All breads'
};

@Component({
  selector: 'app-breed-list',
  templateUrl: './breed-list.component.html',
  styleUrls: ['./breed-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreedListComponent implements OnInit {
  @Input() breeds$!: Observable<Breed[]>;

  @Output() breedsFilterChanges = new EventEmitter<{
    breedIds: string[],
    count: number
  }>();

  breedsForm: any = this.fb.group({
    breeds: [[ALL_BREADS], Validators.required],
    amountOfPictures: [10, Validators.required]
  })

  model$!: Observable<BreedList[]>;

  constructor(
    private readonly fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.model$ = this.breeds$.pipe(
      map((breeds) => [ALL_BREADS, ...breeds.map((item) => ({ name: item.name, id: item.id }))]),
      startWith([])
    );
  }
}

import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable, startWith } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-cat-images',
  templateUrl: './cat-images.component.html',
  styleUrls: ['./cat-images.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatImagesComponent implements OnInit {
  @Input() imageUrlObjs$!: Observable<any>;

  model$!: Observable<string[]>;

  ngOnInit(): void {
    this.model$ = this.imageUrlObjs$.pipe(
      map((items: any) => items.map((item: any) => item.url)),
      startWith([])
    );
  }
}

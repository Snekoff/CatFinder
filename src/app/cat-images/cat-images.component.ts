import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {CatImageService} from "./cat-image.service";
import {selectImages} from "../state/selectors/images.selector";

@Component({
  selector: 'app-cat-images',
  templateUrl: './cat-images.component.html',
  styleUrls: ['./cat-images.component.scss']
})
export class CatImagesComponent implements OnInit {

  imageUrlObjs$ = this.store.select(selectImages);
  imageUrls: Array<string> = [];

  constructor(
    private imageService: CatImageService,
    private store: Store
  ) {
  }

  ngOnInit(): void {
    this.imageUrlObjs$.subscribe((objects) => this.reformatArrayOfObjectsToArrayOsUrls(objects))
  }

  reformatArrayOfObjectsToArrayOsUrls(imageObjects: Array<any>) {
    imageObjects.map((imageObj) => this.imageUrls.push(imageObj.url));
  }

}

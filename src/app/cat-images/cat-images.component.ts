import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {retrievedBreedList} from "../state/breed.actions";
import {CatImageService} from "./cat-image.service";
import {selectImages} from "../state/images.selector";
import {retrievedUrlList} from "../state/images.actions";

@Component({
  selector: 'app-cat-images',
  templateUrl: './cat-images.component.html',
  styleUrls: ['./cat-images.component.css']
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
    this.imageUrlObjs$.subscribe((objects)=>this.reformatArrayOfObjectsToArrayOsUrls(objects))
  }

  reformatArrayOfObjectsToArrayOsUrls(imageObjects: Array<any>) {
    imageObjects.map((imageObj)=>this.imageUrls.push(imageObj.url));
    console.log("this.imageUrls",this.imageUrls);
  }

}

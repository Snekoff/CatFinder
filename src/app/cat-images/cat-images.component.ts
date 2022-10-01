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

  imageUrls$ = this.store.select(selectImages);

  constructor(
    private imageService: CatImageService,
    private store: Store
  ) {
  }

  ngOnInit(): void {
    this.imageService
      .getImagesUrl()
      .subscribe((imageUrls) => this.store.dispatch(retrievedUrlList( {imageUrls} )));
  }

}

import {Injectable} from '@angular/core';
import {selectBreeds} from "../state/selectors/breeds.selectors";
import {Store} from '@ngrx/store';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {selectForm} from "../state/selectors/form.selector";


@Injectable({
  providedIn: 'root'
})
export class CatImageService {
  form$ = this.store.select(selectForm);
  breeds$ = this.store.select(selectBreeds);
  breedListString = '';
  limit = 10;
  breedNamesMap = new Map();


  constructor(private store: Store,
              private http: HttpClient
  ) {

    this.breeds$.subscribe((breeds) => {
      breeds.map((breed) => this.breedNamesMap.set(breed.name, breed.id))
    });

    this.form$.subscribe((form) => {
      this.breedListString = '';

      if (form.hasOwnProperty("value")) {
        if (form.value.hasOwnProperty("amountOfPictures")) this.limit = form.value.amountOfPictures || 10;

        if (form.value.hasOwnProperty("breedsControl")) {
          let array = form.value.breedsControl;
          if(Array.isArray(array[0])) array = array[0];
          console.log(array);
          console.log(this.breedNamesMap);
          array.forEach((item: string, index: number) => {
            if(item === "All Breeds") {
              this.breedListString = "All Breeds";
            } else if(this.breedListString === "") {
              this.breedListString = "breed_id=".concat(this.breedNamesMap.get(item))
            }
          })
        }
      }
    })
  }

  getImagesUrl(): Observable<Array<string>> {

    let url = "https://api.thecatapi.com/v1/images/search?limit=" + this.limit;
    if (this.breedListString.indexOf("All Breeds") === -1 && this.breedListString.indexOf("undefined") === -1 && this.breedListString.length > 0) {
      url = url.concat("&", this.breedListString);
    }
    console.log("url",url);
    console.log("this.breedListString",this.breedListString);
    let options = {
      headers: {
        "x-api-key": "live_9Mjmycqpsu2PJrkc1tBMZoqKWye5Ox1EhdQj6HBiQGAIqd9GchbYu8rlzI7BbqUT"
      }
    }
    return this.http
      .get<Array<string>>(
        url,
        options
      )
      .pipe(map((imagesUrl) => imagesUrl || []));

  }
}

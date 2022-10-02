import {Injectable} from '@angular/core';
import {selectBreeds} from "../state/breeds.selectors";
import {Store} from '@ngrx/store';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Breed} from "../breed-list/breed.model";
import {map} from "rxjs/operators";
import {selectForm} from "../state/form.selector";


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

    this.breeds$.subscribe((breeds)=>{breeds.map((breed)=>this.breedNamesMap.set(breed.name, breed.id))});

    this.form$.subscribe((form) => {
      console.log("form", form);
      this.breedListString = ''
      if(form.hasOwnProperty("value")) {
        if(form.value.hasOwnProperty("amountOfPictures")) this.limit = form.value.amountOfPictures || 10;
        if(form.value.hasOwnProperty("breedsControl")) form.value.breedsControl.forEach((item:string, index:number) => {
          if(index > 0) this.breedListString = this.breedListString.concat(",", this.breedNamesMap.get(item));
          else if(item === "All Breeds") this.breedListString = "All Breeds";
          else this.breedListString = "".concat(this.breedNamesMap.get(item))
        })
      }
    })
  }

  getImagesUrl(): Observable<Array<string>> {

    let url = "https://api.thecatapi.com/v1/images/search?limit=" + this.limit;
    if (this.breedListString.indexOf("All Breeds") === -1 && this.breedListString.indexOf("undefined") === -1 && this.breedListString.length > 0) {
      url = url + "&" + this.breedListString;
    }
    console.log("url", url);
    console.log("this.breedListString", this.breedListString);
    console.log("this.limit", this.limit);
    console.log("getImagesUrl this.form$", this.form$);
    console.log("getImagesUrl this.breeds$", this.breeds$);


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

import {Injectable} from '@angular/core';
import {selectBreeds, selectForm} from "../state/breeds.selectors";
import {Store} from '@ngrx/store';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Breed} from "../breed-list/breed.model";
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class CatImageService {
  form$ = this.store.select(selectForm);
  breeds$ = this.store.select(selectBreeds);
  breedListString = '';
  limit = 0;
  breedNamesMap = new Map();


  constructor(private store: Store,
              private http: HttpClient
  ) {
    this.breeds$.subscribe((breeds)=>{breeds.map((breed)=>this.breedNamesMap.set(breed.name, breed.id))});

    this.form$.subscribe((form) => {
      form.breedsControl.value.forEach((item:string, index:number) => {
        if(index > 0) this.breedListString = this.breedListString + "," + this.breedNamesMap.get(item)
        else this.breedListString = this.breedListString + this.breedNamesMap.get(item)
      })
      this.limit = form.amountOfPictures.value || 10;
    })


  }

  getImagesUrl(): Observable<Array<string>> {

    let url = "https://api.thecatapi.com/v1/breeds?limit=" + this.limit;
    if (this.breedListString.indexOf("All Breeds") === -1) {
      url = url + "&" + this.breedListString;
    }


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

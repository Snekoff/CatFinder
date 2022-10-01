import { Injectable } from '@angular/core';
import {selectBreeds} from "../state/breeds.selectors";
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {Breed} from "../breed-list/breed.model";
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class CatImageService {
  breeds$ = this.store.select(selectBreeds);

  constructor(private store: Store,
              private http: HttpClient
  ) {  }

  getImages(): Observable<Array<string>> {
    let options = { headers: {
        "x-api-key": "live_9Mjmycqpsu2PJrkc1tBMZoqKWye5Ox1EhdQj6HBiQGAIqd9GchbYu8rlzI7BbqUT"
      }
    }
    return this.http
      .get<Array<string>>(
        'https://api.thecatapi.com/v1/breeds?limit=10',
        options
      )
      .pipe(map((breeds) => breeds || []));;
  }
}

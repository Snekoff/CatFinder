import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Breed } from './breed-list.types';

@Injectable({providedIn: 'root'})
export class BreedsService {
  constructor(private http: HttpClient) {
  }

  getBreeds(): Observable<Array<Breed>> {
    let options = {
      headers: {
        "x-api-key": "live_9Mjmycqpsu2PJrkc1tBMZoqKWye5Ox1EhdQj6HBiQGAIqd9GchbYu8rlzI7BbqUT"
      }
    }
    return this.http
      .get<Array<Breed>>(
        'https://api.thecatapi.com/v1/breeds',
        options
      )
      .pipe(map((breeds) => breeds || []));
  }
}

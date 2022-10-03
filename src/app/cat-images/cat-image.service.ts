import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ALL_BREADS } from "../breed-list/breed-list.component";

const API_URL = 'https://api.thecatapi.com/v1/images/search';
const API_KEY = 'live_9Mjmycqpsu2PJrkc1tBMZoqKWye5Ox1EhdQj6HBiQGAIqd9GchbYu8rlzI7BbqUT';

@Injectable({
  providedIn: 'root'
})
export class CatImageService {

  constructor(private http: HttpClient) { }

  getImagesUrl(breedIds: string[], count: number): Observable<string[]> {
    const url = `${API_URL}?limit=${count}${breedIds.includes(ALL_BREADS.id) ? '' : '&breed_ids=' + breedIds[0]}`;
    const options = {
      headers: {
        "x-api-key": API_KEY
      }
    }
    return this.http
      .get<string[]>(
        url,
        options
      )
      .pipe(map((imagesUrl) => imagesUrl || []));
  }
}

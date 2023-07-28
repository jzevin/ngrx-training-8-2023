import { Observable } from 'rxjs';
import { Slide } from 'src/types/presentation-deck';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getSlides(): Observable<Slide[]> {
    return this.http.get<Slide[]>('http://localhost:3000/slides');
  }
}

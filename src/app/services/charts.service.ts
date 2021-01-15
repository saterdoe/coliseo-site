import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, filter, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {
   

  constructor(private http: HttpClient) { }

  getAllIncident(): Observable<Object> {
    const urlAPI = 'http://localhost:3000/incidents';
    return this.http.get(urlAPI);
  }
}

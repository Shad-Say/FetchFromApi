import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Idata } from '../type';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}
  getData() {
    const list = this.http.get(
      'https://saral-dev-api.anuvaad.org/getMarksReport'
    );
    return list;
  }
}

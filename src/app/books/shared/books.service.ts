import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { IBook } from './book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  restRoot = 'http://localhost:4730/books';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<IBook[]> {
    const url = this.restRoot;
    return this.http.get<IBook[]>(url);
  }
  getBook(isbn): Observable<IBook> {
    const url = `${this.restRoot}/${isbn}`;
    return this.http.get<IBook>(url);
  }
  getBooksTXT(): Observable<IBook[]> {
    const url = this.restRoot;
    return this.http.get(url, { observe: 'response' }).pipe(
      map(res => {
        console.table(res);
        return res.body as IBook[];
      })
    );
  }
}

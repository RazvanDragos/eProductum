import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError, tap, map} from 'rxjs/operators';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private restAPI = 'http://localhost:3000/api/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.restAPI).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getProductById(id: number): Observable<HttpResponse<Product>> {
    let url = this.restAPI + id;
    console.log(url);
    return this.http.get<Product>(url, {observe: 'response'});
  }

  postProduct(product: any) {
    return this.http.post<Product>(this.restAPI, product).subscribe();
  }

  putProduct(id: number, product: Product) {
    let url = this.restAPI + id;
    return this.http.put<Product>(url, product).subscribe();
  }

  deleteProduct(id: number) {
    let url = this.restAPI + id;
    return this.http.delete<Product>(url).subscribe();
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }


}

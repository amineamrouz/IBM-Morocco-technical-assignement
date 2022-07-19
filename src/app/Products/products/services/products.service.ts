import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../types/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  urlBackEnd='https://random-data-api.com/api/coffee/random_coffee?size=50 '
  getProducts():Observable<any> {
    return this.http.get(this.urlBackEnd);
  }
}

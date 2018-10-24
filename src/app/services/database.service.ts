import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import {Product} from '../products/products';

@Injectable()
export class DatabaseService {

  private dbUrl= 'http://localhost:3000/api/product/'

  constructor(private http: HttpClient) {
  }

    getProducts (): Observable<Product[]>{
      return this.http.get<Product[]>(this.dbUrl)
    }


}

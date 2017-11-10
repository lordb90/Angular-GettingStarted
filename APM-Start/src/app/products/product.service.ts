import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
// tells compiler to load the library when library is loaded it runs the js giving access to in this case do functionality
import 'rxjs/add/operator/do'; 
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

import { IProduct } from './iproduct';
import { HttpErrorResponse } from '@angular/common/http/src/response';

@Injectable()

export class ProductService {
    private _serviceUrl = './api/products/products.json';

    constructor(private _http: HttpClient) {}
    getProducts(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this._serviceUrl)
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);
    }

    handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}

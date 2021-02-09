import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'
import {IData} from './http'


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private _url :string = "/assets/data/data.json"

  constructor(private http : HttpClient) { }


  getData() : Observable<IData[]>{

    return this.http.get<IData[]>(this._url)
  }
}
 
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class IrasaiService {

  constructor(private http: HttpClient) { }
  getCustomerInfo() : Observable<any>{
    return this.http.get('http://localhost:8081/list');
  }
  postNewCustomer(body : any) : Observable<any>{
    return this.http.post('http://localhost:8081/create', body);
  }
}

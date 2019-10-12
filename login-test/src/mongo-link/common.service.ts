import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
//import 'rxjs/add/operator/pipe';

@Injectable()
export class CommonService {

  constructor(private http: Http) { }

  saveUser(user){
    return this.http.get('http://localhost:8080/api/SaveUser', user)
  }
  
  GetUser() {
    return this.http.get('http://localhost:8080/api/getUser')
  }

  deleteUser(id) {
    return this.http.post('http://localhost:8080/api/deleteUser', {'id': id})
  }
}

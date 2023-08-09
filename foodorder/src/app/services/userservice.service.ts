import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UserModel } from '../shared/models/user';
import { LoginModel } from '../shared/models/login';
import {Observable} from 'rxjs';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  endpoint: string = "http://localhost:5258/api/User/"
  constructor(private http: HttpClient) { }

  createUser(user: UserModel): Observable<any>{
    return this.http.post(this.endpoint + 'SignUp', user);
  }

  
  islogin= new BehaviorSubject<boolean>(false);
  checklogin= this.islogin.asObservable();
  url: string = "http://localhost:5258/api/Auth/Validate"

   userLogin(login: LoginModel): Observable<any>{
     return this.http.post(this.url, login)
   }
  

}

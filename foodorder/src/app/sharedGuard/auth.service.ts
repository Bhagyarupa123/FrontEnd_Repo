import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AuthResponse } from '../shared/models/authResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 authResponse : AuthResponse

  constructor() { }
  IsLogin(){
    return localStorage.getItem('token');
  }

}

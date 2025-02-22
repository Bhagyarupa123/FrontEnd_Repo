import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 constructor(private auth:AuthService, private router:Router){

 }
 canActivate(){
   if(this.auth.IsLogin()){
     return true;
   }
   this.router.navigate(['login'])
   return false;
 }
}
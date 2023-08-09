import { Component, OnInit,ViewChild } from '@angular/core';
import {NgForm, NgModel} from '@angular/forms';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from '../services/userservice.service';
import { AuthResponse } from '../shared/models/authResponse';
import { LoginModel } from '../shared/models/login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  title = 'reactive_forms';
  buttondisplay = false;
  authResponse!: AuthResponse
  token=''
//   createAuthorizationHeader(headers:Headers,basic){
//     headers.append('Authorization',basic);
// }


  loginform!: FormGroup;
  submitted=false;
  login: LoginModel= new LoginModel()
  constructor(private router:Router,private formbuilder: FormBuilder, private userService: UserserviceService){}
  ngOnInit(){
    this.loginform = this.formbuilder.group({
      username:['',[Validators.required,Validators.minLength(4)]] ,
      password: ['',[Validators.required,Validators.minLength(8)]],
     
      })
    
  }

  loginUser(){
    console.log(this.login)
    this.userService.userLogin(this.login).subscribe((response:any)=>{
console.log(response);
  if(response!==null){
    if(response.token!==null){
     
      this.authResponse=response
      localStorage.setItem('userId',response.userId)
      localStorage.setItem('token',response.token)
      this.router.navigate(["/home"])
    }
   
  }

    })
  }
  Onsubmit(){
    this.submitted = true
   
    if(this.loginform.invalid){
      return
    }
    else{
      this.buttondisplay = true;
      this.loginUser();
      
    }
  }

  

    
  }




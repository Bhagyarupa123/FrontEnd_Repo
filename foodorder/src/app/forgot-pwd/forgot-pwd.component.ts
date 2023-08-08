import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-pwd',
  templateUrl: './forgot-pwd.component.html',
  styleUrls: ['./forgot-pwd.component.css']
})
export class ForgotPwdComponent {
  ResetPwd! : FormGroup;
  submitted = false;
  constructor(private router:Router,private formbuilder:FormBuilder){}
  ngOnInit(){
    this.ResetPwd = this.formbuilder.group({
      resetpwd: ['',[Validators.required]]
    })
  }
  Onsubmit(){
    this.submitted = true
    if(this.ResetPwd.invalid){
      return
    }
    else{
      this.router.navigate(['/newpassword']);
    }
  }
}

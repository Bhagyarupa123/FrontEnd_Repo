import { Component ,OnInit,ViewChild} from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import {NgForm, NgModel} from '@angular/forms';
import { ActivatedRoute, Router, UrlSegmentGroup } from '@angular/router';
import { UserserviceService } from '../services/userservice.service';
import { UserModel } from '../shared/models/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  title = 'reactive_forms';
  @ViewChild('myForm') form! : NgForm;

  SignUpForm!: FormGroup;
  submitted= false;
 usermodel: UserModel=new UserModel()

  constructor(private formbuilder: FormBuilder,private router: Router, private userSerive: UserserviceService){}

  ngOnInit(){
    this.SignUpForm = this.formbuilder.group({
      username: ['',[Validators.required,Validators.minLength(4)]],
      password:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      number:['',Validators.required]
    })

  
    
  }
      saveUser(){
        console.log(this.usermodel)
        this.userSerive.createUser(this.usermodel).subscribe((data: any)=>{
          console.log(data);
    
        })
      }
  
  Onsubmit(){
    this.submitted = true
    this.saveUser()
    if(this.SignUpForm.invalid){
      return
    }
    else{
      this.router.navigate(['/login']);
    }
  }
}

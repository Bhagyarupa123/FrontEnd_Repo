import { Component } from '@angular/core';
import { UserserviceService } from './services/userservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'foodorder';
   token=localStorage.getItem('token')
  constructor(private userservice: UserserviceService ){
    if(this.token!==null){
     this.userservice.islogin.next(true)
    }
  }
 
}

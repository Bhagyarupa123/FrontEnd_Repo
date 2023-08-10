import { Component, EventEmitter, Output } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartModel } from '../shared/models/cart';
import { FoodItemModel } from '../shared/models/food';
import { Router } from '@angular/router';
import { UserserviceService } from '../services/userservice.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private cartservice: CartService , private router: Router, private userservice: UserserviceService){
    this.userservice.checklogin.subscribe(x=> this.islogin=x)
  }

  @Output() recipeEmitted= new EventEmitter<FoodItemModel[]>();
  foodItems: FoodItemModel[] = [];
  cartModel: CartModel = new CartModel()
  searchItem: string = '';
  // showCart=false;
  islogin = true;


  onGetCart(){
    this.router.navigate(['/cart']);
      
    }

    onGetOrders(){
      this.router.navigate(['/orders']);
    }


    logout(){
     
      localStorage.removeItem('userId')
      localStorage.removeItem('token');
       this.userservice.islogin.next(false);
      this.router.navigate(['login'])
   }
     
}

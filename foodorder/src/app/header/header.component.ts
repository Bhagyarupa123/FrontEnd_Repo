import { Component, EventEmitter, Output } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartModel } from '../shared/models/cart';
import { FoodItemModel } from '../shared/models/food';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private cartservice: CartService , private router: Router){}

  @Output() recipeEmitted= new EventEmitter<FoodItemModel[]>();
  foodItems: FoodItemModel[] = [];
  cartModel: CartModel = new CartModel()
  searchItem: string = '';
  // showCart=false;
  buttondisplay = false;

  onGetCart(){
    // this.showCart=trur
   // this.recipeEmitted.emit(this.foodItems)
    this.router.navigate(['/cart']);
      
    }

    onGetOrders(){
      this.router.navigate(['/orders']);
    }

    // onRecipeEmitted(foodItems: FoodItemModel[]){
    //   this.recipeEmitted.emit(foodItems)
    // }
    
    logout(){
      localStorage.removeItem('token');
      this.router.navigate(['login'])
   }
     
}

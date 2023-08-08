import { Component } from '@angular/core';
import { FoodService } from '../services/food/food/food.service';
import { FoodItemModel } from '../shared/models/food'
import { ActivatedRoute } from '@angular/router';
import { Cart, CartModel } from '../shared/models/cart';
import { CartService } from '../services/cart.service';
import { OrderModel } from '../shared/models/order';
import {OrderService} from '../services/orderservice.service';
@Component({
   selector: 'app-home',
   templateUrl: './home.component.html',
   styleUrls: ['./home.component.css']
})
export class HomeComponent {

   foodItems: FoodItemModel[] = [];
   originalItems: FoodItemModel[] = [];
   filteredItems: FoodItemModel[] = [];
   cartModel: CartModel = new CartModel()
   searchItem: string = '';
   ordermodel: OrderModel = new OrderModel()
   clicked= false;
   




   constructor(private fs: FoodService, private router: ActivatedRoute, private cartservice: CartService,private orderservice: OrderService) { }

   ngOnInit(): void {
      this.fs.getRecipes().subscribe(
         (data: FoodItemModel[]) => {
            this.foodItems = data;
            this.originalItems = data;
         }
      );
   }

   searchFood() {
      if (this.searchItem !== null && this.searchItem.length > 0) {
         this.filteredItems = this.originalItems.filter(item =>
            item.recipeName.toLowerCase().includes(this.searchItem.toLowerCase())
         );
         this.foodItems = this.filteredItems
      } else {
         this.foodItems = this.originalItems;
      }
   }

   saveToCart(recipeId: number) {
      this.clicked = true;
      this.cartModel.userId = Number(localStorage.getItem('userId'));
      this.cartModel.recipeId = recipeId;
      this.cartservice.addToCart(this.cartModel).subscribe((data: any) => {
         console.log(data);
      })
   }
   confirmOrder(recipeId: number) {
    
      console.log("the recipe id is", recipeId)
      this.ordermodel.userId= Number(localStorage.getItem('userId'));
      this.ordermodel.recipeId = recipeId;
      this.orderservice.confirmOrder(this.ordermodel).subscribe((data: any) => {
         console.log(data);
      })
    }




}
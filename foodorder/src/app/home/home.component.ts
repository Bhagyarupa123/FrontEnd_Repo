import { Component } from '@angular/core';
import { FoodService } from '../services/food/food/food.service';
import { CartItemModel, FoodItemModel } from '../shared/models/food'
import { ActivatedRoute, Router } from '@angular/router';
import { Cart, CartModel } from '../shared/models/cart';
import { CartService } from '../services/cart.service';
import { OrderModel } from '../shared/models/order';
import {OrderService} from '../services/orderservice.service';
import { AuthService } from '../sharedGuard/auth.service';
import { UserserviceService } from '../services/userservice.service';
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
   clicked:boolean = false;
   orderclicked:boolean = false;
   isAdd:boolean = true;
   
   islogin = false;

   rcids = []

   orderIds=[]
   private cartKey = 'cartId';
   cartItems  = [];




   
   constructor(private fs: FoodService, private router: ActivatedRoute, private cartservice: CartService,private orderservice: OrderService, private userservice: UserserviceService,private route: Router,private auth: AuthService,) { 
      this.userservice.checklogin.subscribe(x=> this.islogin=x)
      
      
   
   }

   ngOnInit(): void {
      this.fs.getRecipes().subscribe(
         (data: FoodItemModel[]) => {
            this.foodItems = data;
            this.originalItems = data;
         }
      );
      this.cartservice.getCartItems().subscribe((data:any)=>{
         this.cartItems = data;
         console.log(data);
      })
     
   }

   

   searchFood() {
      if (this.searchItem !== null && this.searchItem.length > 0) {
         this.filteredItems = this.originalItems.filter(item =>
            item.recipeName.toLowerCase().includes(this.searchItem.toLowerCase())
         );
         if(this.filteredItems.length > 0){
            this.foodItems = this.filteredItems
            console.log("items found");
         }
         else{
            
            this.foodItems = [];
            console.log("Items not found")
            console.log(this.foodItems.length)
         }

      } else {
         this.foodItems = this.originalItems;
      }
   }

   saveToCart(recipeId: number) {
      //this.cartItems.push(recipeId);
      //this.cartModel.cartId = Number(localStorage.setItem(this.cartKey,JSON.stringify(this.cartItems)))
      this.clicked = true;
      this.cartModel.userId = Number(localStorage.getItem('userId'));
      this.cartModel.recipeId = recipeId;
      this.cartservice.addToCart(this.cartModel).subscribe((data: any) => {
         console.log(data);
      })
     // this.resetItems()
   }
   
  
   isSelected(recipeId: number) {
      return this.cartservice.Items.includes(recipeId);
   }
   /*
   isSelected(recipeId:number){
      if(this.cartservice.cartItem.includes(recipeId)){
         this.isAdd = true;
      }
      else{
         this.isAdd = false;
      }
   }*/

   isSelectedOrder(id: number) {

      return this.orderIds.includes(id);
   }
  
  
   confirmOrder(recipeId: number) {
    
      console.log("the recipe id is", recipeId)
      
      this.orderIds.push(recipeId);
      //this.ordermodel.orderId=Number(localStorage.setItem(this.cartKey,JSON.stringify(this.orderIds)));
      this.orderclicked = true;
      this.ordermodel.userId= Number(localStorage.getItem('userId'));
      this.ordermodel.recipeId = recipeId;
      this.orderservice.confirmOrder(this.ordermodel).subscribe((data: any) => {
         console.log(data);
      })
    }
  



}
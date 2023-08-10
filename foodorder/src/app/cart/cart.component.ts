import { ThisReceiver } from '@angular/compiler';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';
import { OrderService } from '../services/orderservice.service';
import { Cart, CartModel } from '../shared/models/cart';
import { CartItemModel } from '../shared/models/food';
import { OrderModel } from '../shared/models/order';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  // @Input() recipeReceived=FoodItemModel[]; 
   foodItems: CartItemModel[] = [];
   cartmodel: CartModel = new CartModel()
   ordermodel: OrderModel = new OrderModel()
   




  constructor(private orderservice: OrderService , private router: ActivatedRoute, private cartservice: CartService){}
  ngOnInit():void{
    this.cartservice.getCartItems().subscribe(
     
      (data: CartItemModel[])=>{
        this.foodItems=data;
        console.log("the food items are", this.foodItems)
      }
    )

  }

  confirmOrder(recipeId: number) {
    
    console.log("the recipe id is", recipeId)
    this.ordermodel.userId = Number(localStorage.getItem('userId'));
    this.ordermodel.recipeId = recipeId;
    this.orderservice.confirmOrder(this.ordermodel).subscribe((data: any) => {
       console.log(data);
    })
  }

  deleteCart(cartId: number){
    this.cartservice.deleteCart(cartId).subscribe(()=> 
      console.log("Deleted successfully!")
    )
    window.location.reload();

  }
}

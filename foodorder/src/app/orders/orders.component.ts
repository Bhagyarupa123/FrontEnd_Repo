import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodItemModel, OrderItemModel } from '../shared/models/food';
import { OrderService } from '../services/orderservice.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

  foodItems: OrderItemModel[] = [];


  constructor(private orderservice: OrderService , private router: ActivatedRoute){}
  ngOnInit():void{
    this.orderservice.getAllOrders().subscribe(
     
      (data: OrderItemModel[])=>{
        this.foodItems=data;
        console.log("the order items are", this.foodItems)
      }
    )

  }


}

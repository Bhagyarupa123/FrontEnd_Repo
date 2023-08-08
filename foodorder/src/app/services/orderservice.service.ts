import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderItemModel } from '../shared/models/food';
import { OrderModel } from '../shared/models/order';



@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private order: OrderModel= new OrderModel();
   
  
  endpoint: string = "http://localhost:5258/api/Order/"
  constructor(private http: HttpClient){}

  confirmOrder( order: OrderModel): Observable<any>{
    return this.http.post(this.endpoint + "ConfirmOrder", order)
  }

  getAllOrders(): Observable<OrderItemModel[]>{
    return this.http.get<OrderItemModel[]>(this.endpoint + "GetAllOrders/" + Number(localStorage.getItem('userId')));
  }



}

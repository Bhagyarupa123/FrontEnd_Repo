import { Injectable } from '@angular/core';
import { Cart, CartModel } from '../shared/models/cart';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartItemModel } from '../shared/models/food';



@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Cart= new Cart();
   
  
  endpoint: string = "http://localhost:5258/api/Cart/"
  constructor(private http: HttpClient){}

  addToCart( cart: CartModel): Observable<any>{
    return this.http.post(this.endpoint + "AddToCart", cart)
  }

  getCartItems(): Observable<CartItemModel[]>{
    return this.http.get<CartItemModel[]>(this.endpoint + "GetRecipe/" + Number(localStorage.getItem('userId')));
  }

  deleteCart(id: number){
    return this.http.delete(this.endpoint+"DeleteRecipe/" +id);
  }



}

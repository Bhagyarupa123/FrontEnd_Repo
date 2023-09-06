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
  Items = []
  cartItem = [];
  removeItem = [];
   
  
  endpoint: string = "http://localhost:5258/api/Cart/"
  constructor(private http: HttpClient){
    
  }

  addToCart( cart: CartModel): Observable<any>{
    this.cartItem.push(cart.recipeId);
    return this.http.post(this.endpoint + "AddToCart", cart)
  }

  getCartItems(): Observable<CartItemModel[]>{
    this.Items = this.cartItem;
    return this.http.get<CartItemModel[]>(this.endpoint + "GetRecipe/" + Number(localStorage.getItem('userId')));
  }

  deleteCart(id: number){
    this.removeItem.push(id);
    return this.http.delete(this.endpoint+"DeleteRecipe/" +id);
  }

  



}

import { getLocaleCurrencyCode } from '@angular/common';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {FoodItemModel} from 'src/app/shared/models/food'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  endpoint: string = "http://localhost:5258/api/Recipe/"
  constructor(private http: HttpClient) { }

  // getAll():string[]{
  //   return [
      
  //     '/assets/biriyani9.jpg',
  //     '/assets/biriyani8.jpg',

  //     '/assets/pizza2.jpg',
  //     '/assets/pizza3.jpg',
  //     '/assets/pizza4.jpg',
  //     '/assets/cake2.jpg',
  //     '/assets/chickenfried2.jpg',
  //     '/assets/ice2.jpg'
      



  //   ]
  // }

  // getRecipes(){
  // var  FoodItemModel[] items=  this.http.get(this.endpoint+"GetAllRecipes");
  // return items;
  // }

  getRecipes(): Observable<FoodItemModel[]> {
    return this.http.get<FoodItemModel[]>(this.endpoint + 'GetAllRecipes');
  }

  
}


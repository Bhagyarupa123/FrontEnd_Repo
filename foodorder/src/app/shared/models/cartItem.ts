import { FoodItemModel } from './food';

export class CartItem{

    constructor(food: FoodItemModel){
        this.food=food;
        this.getPrice
    }
    food: FoodItemModel
    quantity:number=1
    getPrice(): Number{
        return this.food.price* this.quantity;
    }
}
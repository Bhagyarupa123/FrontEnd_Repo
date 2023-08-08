import { CartItem } from './cartItem';

export class Cart{
    items:CartItem[]=[];

    // get totalPrice():number {
    //     let totalPrice=0;
    //     this.items.forEach(item=> {
    //      totalPrice= item
    //     })

    //     return totalPrice
    // }
}

export class CartModel{
  cartId: number=0;
  userId?: number;
  recipeId?: number;
}


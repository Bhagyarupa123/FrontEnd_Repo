export class FoodItemModel{
    recipeId!:number;
    price! :number
    recipeName!:string;
    description!:String;
    favorite: boolean=false;
    Star : number=0;
    imageUrl!: string;
    cookTime!: string;
  
    
}

export class CartItemModel{
    recipeId!:number;
    price! :number
    recipeName!:string;
    description!:String;
    favorite: boolean=false;
    Star : number=0;
    recipeImage!: string;
    cookTime!: string;
    cartId!: number;
  
    
}

export class OrderItemModel{
    recipeId!:number;
    price! :number
    recipeName!:string;
    description!:String;
    favorite: boolean=false;
    Star : number=0;
    recipeImage!: string;
    cookTime!: string;
    orderId!: number;
  
    
}
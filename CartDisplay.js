import { CartProduct } from "./CartProduct.js";
import { arrayCartList, arrayListFruits } from "./list.js";

export class CartDisplay{

  //cart product constructor
  cartProductCreator = (index) => {
    let cartItem  = new CartProduct(index, arrayListFruits[index].product, arrayListFruits[index].quantity, arrayListFruits[index].price, arrayListFruits[index].discount, arrayListFruits[index].itemToCart);
    arrayCartList.push(cartItem);
  };

  //addProductToCart Display button
  addProductToCart = (index) => {    
    if (arrayListFruits[index].quantity == 0) {
      document.querySelector("#modalProduct").style.display = "flex";
      document.querySelector("#modalProductText").innerHTML = "Dispiace, purtroppo non abbiamo più di questo prodotto in stock";
    } else if (arrayListFruits[index].quantity >= arrayListFruits[index].itemToCart) {
      arrayListFruits[index].quantity -= arrayListFruits[index].itemToCart;
      
      if(arrayCartList.length == 0 || arrayCartList.findIndex(item => item.product === arrayListFruits[index].product) === -1){
        this.cartProductCreator(index);
        this.cartNumberDisplay;
        this.getTotalCartValue;
        arrayCartList[index].getDisplayItem();
    } else if (arrayCartList[index].id === index){
      let repeatedCartItem = new CartProduct(index, arrayListFruits[index].product, arrayListFruits[index].quantity, arrayListFruits[index].price, arrayListFruits[index].discount, arrayListFruits[index].itemToCart);
      arrayCartList[index].itemToCart += repeatedCartItem.itemToCart;
      this.cartNumberDisplay;
      this.getTotalCartValue;
      arrayCartList[index].getDisplayItem();
    }
  }
};


  get cartNumberDisplay(){
    let i = 0;
    arrayCartList.forEach((item) =>{
      i += item.itemToCart;
    });
    document.querySelector("#cartNumberDisplay").innerHTML = i;
  };

  //Total Value Cart
   get getTotalCartValue(){
    let totalCartValue = 0;
    arrayCartList.forEach(function (item){
      totalCartValue += item.getTotalProduct;
    });
    document.querySelector("#total").innerHTML = totalCartValue.toFixed(2);
  };

}
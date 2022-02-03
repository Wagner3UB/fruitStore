"use strict";
import { CartProduct } from "./CartProduct.js";
import { arrayListFruits} from "./ProductDisplay.js";
import { AdmPanel } from "./AdmPanel.js";

export let arrayCartList = [];

export class CartDisplay{

  //cart product constructor
  cartProductCreator = (index) => {
    let cartItem  = new CartProduct(index, arrayListFruits[index].product, arrayListFruits[index].quantity, arrayListFruits[index].price, arrayListFruits[index].discount, arrayListFruits[index].itemToCart);
    arrayCartList.push(cartItem);
  };

  //addProductToCart Display button
  addProductToCart = (index) => { 
    //arrayListFruits[index] -> ritorna sempre il prodotto cliccato nella home
    if (arrayListFruits[index].quantity == 0) {
      document.querySelector("#modalProduct").style.display = "flex";
      document.querySelector("#modalProductText").innerHTML = "Dispiace, purtroppo non abbiamo più di questo prodotto in stock";
    } else if (arrayListFruits[index].quantity >= arrayListFruits[index].itemToCart) {
      arrayListFruits[index].quantity -= arrayListFruits[index].itemToCart;
      
      //important - solo dopo il primo cart product creato:
      //l'index della lista arrayListFruits === id dello stesso prodotto della lista arrayCartList
      //index === arrayCartList.find(item => item.id === index).id
      //console.log(index);
      //console.log(arrayCartList.find(item => item.id === index).id);

      if(arrayCartList.length == 0 || arrayCartList.findIndex(item => item.product === arrayListFruits[index].product) === -1){
        this.cartProductCreator(index);
        this.cartNumberDisplay;
        this.getTotalCartValue;
        arrayCartList.find(item => item.id === index).getDisplayItem();
        new AdmPanel().getListAdm();
        document.getElementById("discountButton").style.display = "unset";

      } else if (arrayCartList.find(item => item.id === index)){
        arrayCartList.find(item => item.id === index).itemToCart += arrayListFruits[index].itemToCart;
        this.cartNumberDisplay;
        this.getTotalCartValue;
        arrayCartList.find(item => item.id === index).getDisplayItem();
        new AdmPanel().getListAdm();
      }
    }
  };

  //Numero su carrello
  get cartNumberDisplay(){
    let i = 0;
    arrayCartList.forEach((item) =>{
      i += item.itemToCart;
    });
    document.querySelector("#cartNumberDisplay").innerHTML = i;
  };

  //Total Value Cart before Final discount
   get getTotalCartValue(){
    let totalCartValue = 0;
    arrayCartList.forEach(function (item){
      totalCartValue += item.getTotalProduct;
    });
    document.querySelector("#total").innerHTML = totalCartValue.toFixed(2);
    document.querySelector("#finalCartValue").innerHTML = totalCartValue.toFixed(2);

    const finalDiscount = () => {
      document.querySelector(".productCartTotal li:nth-of-type(2)").style.opacity= 1;
      let cartValue = totalCartValue*0.8;
      document.querySelector("#finalCartValue").innerHTML = cartValue.toFixed(2);
    }

    document.getElementById("discountButton").addEventListener("click", finalDiscount);

    
  };

}
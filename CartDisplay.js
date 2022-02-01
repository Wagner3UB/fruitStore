import { CartProduct } from "./CartProduct.js";
import { arrayListFruits} from "./ProductDisplay.js";

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
        console.log(index);
        console.log(arrayCartList.find(item => item.id === index).id);
        arrayCartList.find(item => item.id === index).getDisplayItem();

    } else if (arrayCartList.find(item => item.id === index)){
      arrayCartList.find(item => item.id === index).itemToCart += arrayListFruits[index].itemToCart;
      this.cartNumberDisplay;
      this.getTotalCartValue;
      arrayCartList.find(item => item.id === index).getDisplayItem();
    }}
  };

  //addQuantityCart Display button
  addQuantityCart = (index) => {
    console.log(index)
  if (arrayListFruits[index].quantity == 0) {
    document.querySelector("#modalProduct").style.display = "flex";
    document.querySelector("#modalProductText").innerHTML = "Dispiace, purtroppo non abbiamo più di questo prodotto in stock";
  } else if(arrayListFruits[index].quantity >= arrayListFruits[index].itemToCart){
    arrayListFruits[index].quantity -= 1;
 
    if(arrayCartList.length == 0 || arrayCartList.findIndex(item => item.product === arrayListFruits[index].product) === -1){
    cartProductCreator(index);
    this.cartNumberDisplay;
    arrayCartList[index].getDisplayItem();
    arrayCartList[index].getTotalCartValue();

  } else if (arrayCartList[index].id == index){
    let repeatedCartItem = new CartProduct(index, arrayListFruits[index].product, arrayListFruits[index].quantity, arrayListFruits[index].price, arrayListFruits[index].discount, arrayListFruits[index].itemToCart);
    arrayCartList[index].itemToCart += 1;
    this.cartNumberDisplay;
    arrayCartList[index].getDisplayItem();
    this.getTotalCartValue;
  }}
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
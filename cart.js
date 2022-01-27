import { NewCartProduct } from "./productGenerator.js";
import { listCartGenerator, listGenerator } from "./listGenerator.js";
import { arrayCartList, arrayListFruits } from "./list.js";

//Total
const total = () => {
  let total = 0;
  arrayCartList.forEach(function (item){
    total += item.total();
  });
  document.querySelector("#total").innerHTML = total.toFixed(2);
}


//addToCart Display button
export const addToCart = (index) => {
  const arrayCart = arrayListFruits[index];

  const newCartItemCreator = () => {
    let newCartItem = new NewCartProduct(index, arrayCart.product, arrayCart.quantity, arrayCart.price, arrayCart.discount, arrayCart.itemToCart);

    let object = {
      id: newCartItem.cartProductId,
      product: newCartItem.cartProductName,
      price: newCartItem.cartProductPrice,
      quantity: newCartItem.cartProductQuantity, 
      discount: newCartItem.cartProductDiscount,
      itemToCart: newCartItem.cartItemToCart,
      total: function (){
        return (this.price * this.itemToCart)*((100-this.discount)/100);
      }
    };
    arrayCartList.push(object);
  };

  const cartNumberDisplay = () => {
    let i = 0;
    arrayCartList.forEach( function (item){
      i += item.itemToCart;
    })
    document.querySelector("#cartNumberDisplay").innerHTML = i;
  }
  if (arrayCart.quantity == 0) {
    document.querySelector("#modalProduct").style.display = "flex";
    document.querySelector("#modalProductText").innerHTML = "Dispiace, purtroppo non abbiamo più di questo prodotto in stock";
  } else if(arrayCart.quantity >= arrayCart.itemToCart){
    arrayCart.quantity -= arrayCart.itemToCart;
    console.log(arrayCart);
    
    if(arrayCartList.length == 0 || arrayCartList.findIndex(item => item.product === arrayCart.product) === -1){
    
    console.log(arrayCart.quantity)
    console.log(arrayCart.itemToCart)
    newCartItemCreator();
    cartNumberDisplay();
    listCartGenerator();
    total();
  }  else if (arrayCartList[index].id == index){
    let repeatedCartItem = new NewCartProduct(index, arrayCart.product, arrayCart.quantity, arrayCart.price, arrayCart.discount, arrayCart.itemToCart);

    arrayCartList[index].itemToCart += repeatedCartItem.cartItemToCart;
    cartNumberDisplay();
    listCartGenerator();
    total();
  } else if (arrayCart.quantity == 0) {
    console.log(arrayCart.quantity)
    console.log(arrayCart.itemToCart)
    alert("novo");
  }}
};
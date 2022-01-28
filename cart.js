import { CartProduct } from "./CartProduct.js";
import { listCartGenerator } from "./listGenerator.js";
import { arrayCartList, arrayListFruits } from "./list.js";

//Total
const total = () => {
  let total = 0;
  arrayCartList.forEach(function (item){
    total += item.getTotal();
  });
  document.querySelector("#total").innerHTML = total.toFixed(2);
}

//cart product constructor
const newCartItemCreator = (index) => {
  let object  = new CartProduct(index, arrayListFruits[index].product, arrayListFruits[index].quantity, arrayListFruits[index].price, arrayListFruits[index].discount, arrayListFruits[index].itemToCart);

  arrayCartList.push(object);
};

//Display cart number
const cartNumberDisplay = (index) => {
  let i = 0;
  arrayCartList.forEach( function (item){
    i += item.itemToCart;
  })
  document.querySelector("#cartNumberDisplay").innerHTML = i;
}

//addToCart Display button
export const addToCart = (index) => {
  if (arrayListFruits[index].quantity == 0) {
    document.querySelector("#modalProduct").style.display = "flex";
    document.querySelector("#modalProductText").innerHTML = "Dispiace, purtroppo non abbiamo più di questo prodotto in stock";
  } else if(arrayListFruits[index].quantity >= arrayListFruits[index].itemToCart){
    arrayListFruits[index].quantity -= arrayListFruits[index].itemToCart;
 
    if(arrayCartList.length == 0 || arrayCartList.findIndex(item => item.product === arrayListFruits[index].product) === -1){
    newCartItemCreator(index);
    cartNumberDisplay(index);
    listCartGenerator();
    total();
  } else if (arrayCartList[index].id == index){
    let repeatedCartItem = new CartProduct(index, arrayListFruits[index].product, arrayListFruits[index].quantity, arrayListFruits[index].price, arrayListFruits[index].discount, arrayListFruits[index].itemToCart);

    arrayCartList[index].itemToCart += repeatedCartItem.cartItemToCart;
    cartNumberDisplay(index);
    listCartGenerator();
    total();
  }}
};

//addToCart Display button
export const addItemToCart = (index) => {
  if (arrayListFruits[index].quantity == 0) {
    document.querySelector("#modalProduct").style.display = "flex";
    document.querySelector("#modalProductText").innerHTML = "Dispiace, purtroppo non abbiamo più di questo prodotto in stock";
  } else if(arrayListFruits[index].quantity >= arrayListFruits[index].itemToCart){
    arrayListFruits[index].quantity -= 1;
 
    if(arrayCartList.length == 0 || arrayCartList.findIndex(item => item.product === arrayListFruits[index].product) === -1){
    newCartItemCreator(index);
    cartNumberDisplay(index);
    listCartGenerator();
    total();
  } else if (arrayCartList[index].id == index){
    let repeatedCartItem = new CartProduct(index, arrayListFruits[index].product, arrayListFruits[index].quantity, arrayListFruits[index].price, arrayListFruits[index].discount, arrayListFruits[index].itemToCart);
    console.log(arrayCartList[index].itemToCart, repeatedCartItem.cartItemToCart)
    console.log(arrayCartList, repeatedCartItem)

    arrayCartList[index].itemToCart += 1;
    cartNumberDisplay(index);
    listCartGenerator();
    total();
  }}
};

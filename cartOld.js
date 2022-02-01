import { CartProduct } from "./CartProduct.js";
import { arrayCartList, arrayListFruits } from "./list.js";

//cart product constructor
const cartProductCreator = (index) => {
  console.log(index)
  let cartItem  = new CartProduct(index, arrayListFruits[index].product, arrayListFruits[index].quantity, arrayListFruits[index].price, arrayListFruits[index].discount, arrayListFruits[index].itemToCart);
  console.log(cartItem)
  arrayCartList.push(cartItem);
  console.log(arrayCartList[index].id)
};



//addQuantityCart Display button
export const addQuantityCart = (index) => {
  if (arrayListFruits[index].quantity == 0) {
    document.querySelector("#modalProduct").style.display = "flex";
    document.querySelector("#modalProductText").innerHTML = "Dispiace, purtroppo non abbiamo più di questo prodotto in stock";
  } else if(arrayListFruits[index].quantity >= arrayListFruits[index].itemToCart){
    arrayListFruits[index].quantity -= 1;
 
    if(arrayCartList.length == 0 || arrayCartList.findIndex(item => item.product === arrayListFruits[index].product) === -1){
    cartProductCreator(index);
    arrayCartList[index].cartNumberDisplay(index);
    arrayCartList[index].getDisplayItem();
    arrayCartList[index].getTotalCartValue();

  } else if (arrayCartList[index].id == index){
    let repeatedCartItem = new CartProduct(index, arrayListFruits[index].product, arrayListFruits[index].quantity, arrayListFruits[index].price, arrayListFruits[index].discount, arrayListFruits[index].itemToCart);
    arrayCartList[index].itemToCart += 1;
    arrayCartList[index].cartNumberDisplay(index);
    arrayCartList[index].getDisplayItem();
    arrayCartList[index].getTotalCartValue();
  }}
};

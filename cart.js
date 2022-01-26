import { NewCartProduct } from "./productGenerator.js";
import { listCartGenerator } from "./listGenerator.js";
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
  const newCartItemCreator = () => {
    let newCartItem = new NewCartProduct(index, arrayListFruits[index].product, arrayListFruits[index].quantity, arrayListFruits[index].price);

    let object = {
      id: newCartItem.cartProductId,
      product: newCartItem.cartProductName,
      price: newCartItem.cartProductPrice,
      quantity: newCartItem.cartProductQuantity, 
      total: function (){
        return this.price * this.quantity;
      }
    };
    arrayCartList.push(object);
  };

  const cartNumberDisplay = () => {
    let i = 0;
    arrayCartList.forEach( function (item){
      i += item.quantity;
    })
    document.querySelector("#cartNumberDisplay").innerHTML = i;
  }
  if(arrayCartList.length == 0){
    newCartItemCreator();
    cartNumberDisplay();
    listCartGenerator();
    total();
  } else if (arrayCartList[index].id == index){
    //FAZER UMA BUSCA POR ALGUM DOS ITENS E NAO POR INDEX
    let repeatedCartItem = new NewCartProduct(index, arrayListFruits[index].product, arrayListFruits[index].quantity, arrayListFruits[index].price);

    arrayCartList[index].quantity += repeatedCartItem.cartProductQuantity;
    cartNumberDisplay();
    listCartGenerator();
    total();
  }
};
import { arrayCartList, arrayListFruits} from "./list.js";
import { addNewItem } from "./addProduct.js";
import { addProductToCart, addQuantityCart } from "./cart.js";
import { Product } from "./Product.js";
/* import { listGenerator } from "./firstDisplayGenertor.js"; */


//open cart
const cartDisplayOn = () => {
  document.querySelector('#cart').style.display = 'flex';
}
document.querySelector("#cartDisplay").addEventListener("click", cartDisplayOn);
document.querySelector("#checkout").addEventListener("click", cartDisplayOn);

//close cart
const cartDisplayOff = () => {
  document.querySelector('#cart').style.display = 'none';
}
document.querySelector(".cartClose").addEventListener("click", cartDisplayOff);

//open adm panel
const admDisplayOn = () => {
  document.querySelector('#admPanel').style.display = 'flex';
}
document.querySelector(".openPanel").addEventListener("click", admDisplayOn);

//close adm panel
const admDisplayOff = () => {
  document.querySelector('#admPanel').style.display = 'none';
}
document.querySelector(".closePanel").addEventListener("click", admDisplayOff);

//close modalProductAlert
const modalProductOff = () => {
  document.querySelector('#modalProduct').style.display = 'none';
}
document.querySelector("#modalProductClose").addEventListener("click", modalProductOff);

//add new product
document.getElementById("productAdd").addEventListener("click", addNewItem);

let i;

//addQuantityHome Display button
const addQuantityHome = (index) => {
  i = index;

  if(arrayListFruits[index].quantity > arrayListFruits[index].itemToCart){
    arrayListFruits[index].itemToCart += 1;
    arrayListFruits[index].getListHome();
  } else {
    document.querySelector("#modalProduct").style.display = "flex";
    document.querySelector("#modalProductText").innerHTML = "Dispiace, purtroppo non è possibile aggiungere più prodotti";
  }

};


//removeQuantity Display button
const removeQuantityHome = (index) => {
  if(arrayListFruits[index].itemToCart <= 1){
    return
  }else{
    arrayListFruits[index].itemToCart -= 1;
    arrayListFruits[index].getListHome();
  arrayCartList();
  }
};
window.addQuantityHome = addQuantityHome;
window.removeQuantityHome = removeQuantityHome;
window.addProductToCart = addProductToCart;
window.addQuantityCart = addQuantityCart;

const startObject = new Product ("Banana", "Gialla, 12 unità per mazzo e proveniente dalla Costa Rica.", 5, 20, 5, "https://www.nonsprecare.it/wp-content/uploads/2018/12/benefici-delle-banane.jpg", "Un mazzo di banane gialle", 1);
arrayListFruits.push(startObject);
startObject.getListHome();
startObject.getListAdm();
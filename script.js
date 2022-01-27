import { arrayListFruits} from "./list.js";
import { listGenerator} from "./listGenerator.js";
import { addNewItem } from "./addProduct.js";
import { addToCart } from "./cart.js";


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

//add new product
document.getElementById("productAdd").addEventListener("click", addNewItem);

//addQuantity Display button
const addQuantity = (index) => {

  if(arrayListFruits[index].quantity > arrayListFruits[index].itemToCart){
    arrayListFruits[index].itemToCart += 1;
    listGenerator();
  } else {
    alert("non puoi aggiungere più prodotti");
  }

};
window.addQuantity = addQuantity;

//removeQuantity Display button
const removeQuantity = (index) => {
  if(arrayListFruits[index].itemToCart <= 1){
    return
  }else{
    arrayListFruits[index].itemToCart -= 1;
  listGenerator();
  }
};
window.removeQuantity = removeQuantity;
window.addToCart = addToCart;
listGenerator();
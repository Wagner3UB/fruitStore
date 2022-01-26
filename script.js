import { arrayListFruits } from "./list.js";
import { listGenerator } from "./listGenerator.js";
import { addNewItem } from "./addProduct.js";


//open cart
const cartDisplayOn = () => {
  document.querySelector('#cart').style.display = 'flex';
}
document.querySelector("#cartDisplay").addEventListener("click", cartDisplayOn);
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
  arrayListFruits[index].quantity += 1;
  listGenerator();
};
window.addQuantity = addQuantity;

//removeQuantity Display button
const removeQuantity = (index) => {
  if(arrayListFruits[index].quantity <= 1){
    return
  }else{
    arrayListFruits[index].quantity -= 1;
  listGenerator();
  }

};
window.removeQuantity = removeQuantity;

listGenerator();
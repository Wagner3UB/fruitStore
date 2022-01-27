import { NewProduct } from "./productGenerator.js";
import { arrayListFruits } from "./list.js";
import { listGenerator } from "./listGenerator.js";
import { validations, denied, checked } from "./validations.js";

export let addNewItem = () => {

  validations();

  let object  = new NewProduct(checked[0],checked[1],checked[2],checked[3],checked[4],checked[5],checked[6]);

  if(denied == false){
    arrayListFruits.push(object);
    listGenerator();
    clearInput();
  }
}

//Clear input
const clearInput = () => {
  document.querySelector("#productName").value = "";
  document.querySelector("#productDescription").value = "";
  document.querySelector("#productPrice").value = "";
  document.querySelector("#productDiscount").value = "";
  document.querySelector("#productQuantity").value = "";
  document.querySelector("#productImage").value = "";
  document.querySelector("#productImageAlt").value = "";
};
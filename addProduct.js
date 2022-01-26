import { NewProduct } from "./productGenerator.js";
import { arrayListFruits } from "./list.js";
import { listGenerator } from "./listGenerator.js";
import { validations, denied, checked } from "./validations.js";

export let addNewItem = () => {

  validations();

  let newItem = new NewProduct(checked[0],checked[1],checked[2],checked[3],checked[4],checked[5],checked[6]);
  
  let object = {
    product: newItem.product,
    description: newItem.description,
    price: newItem.price,
    discount: newItem.discount, 
    quantity: newItem.quantity, 
    image: newItem.image,
    imageAlt: newItem.imageAlt
  };


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
import { NewProduct } from "./productGenerator.js";
import { arrayListFruits } from "./list.js";
import { newListGenerator } from "./newListGenerator.js";

export let addNewItem = () => {
  let newItem = new NewProduct(
    document.querySelector("#productName").value,
    document.querySelector("#productDescription").value,
    document.querySelector("#productPrice").value,
    document.querySelector("#productDiscount").value,
    document.querySelector("#productQuantity").value,
    document.querySelector("#productImage").value,
    document.querySelector("#productImageAlt").value,
  );
  let object = {
    product: newItem.product,
    description: newItem.description,
    price: newItem.price,
    discount: newItem.discount, 
    quantity: newItem.quantity, 
    image: newItem.image,
    imageAlt: newItem.imageAlt
  };
  arrayListFruits.push(object);
  console.log(arrayListFruits);
 
  newListGenerator();
}
export let newArrayListFruits = arrayListFruits;


import { ProductDisplay } from "./ProductDisplay.js";
import { CartDisplay } from "./CartDisplay.js";

const productDisplay = new ProductDisplay();
const cartDisplay = new CartDisplay();

productDisplay.startProduct();

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
document.getElementById("productAdd").addEventListener("click", function(){productDisplay.addNewItem;});

const addHome = (index) => {
  productDisplay.addQuantityHome(index);
}
const removeHome = (index) => {
  productDisplay.removeQuantityHome(index);
}
const toCart = (index) => {
  cartDisplay.addProductToCart(index);
}
const addCart = (index) => {
  cartDisplay.addQuantityCart(index);
}

//Insersione onclick="" allo scopo del JS
//Sono pulsanti della pagina con l'evento onclick 
window.addHome = addHome;
window.removeHome = removeHome;
window.toCart = toCart;
window.addCart = addCart;
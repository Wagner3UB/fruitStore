import { ProductDisplay } from "./ProductDisplay.js";
import { CartDisplay } from "./CartDisplay.js";
import { CartProduct } from "./CartProduct.js";
import { AdmPanel } from "./AdmPanel.js";

const productDisplay = new ProductDisplay();
const cartDisplay = new CartDisplay();
const cartProduct = new CartProduct();
const admPanel = new AdmPanel();

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
  cartProduct.addQuantityCart(index);
}
const removeCart = (index) => {
  cartProduct.removeQuantityCart(index);
}
const addAdm = (index) => {
  admPanel.addQuantityAdm(index);
}
const removeAdm = (index) => {
  admPanel.removeQuantityAdm(index);
}

//Insersione onclick="" allo scopo del JS
//Sono pulsanti della pagina con l'evento onclick 
window.addHome = addHome;
window.removeHome = removeHome;
window.toCart = toCart;
window.addCart = addCart;
window.removeCart = removeCart;
window.addAdm = addAdm;
window.removeAdm = removeAdm;
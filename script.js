import { arrayCartList, arrayListFruits} from "./list.js";
import { addNewItem } from "./addProduct.js";
import { addProductToCart, addQuantityCart } from "./cart.js";
import { Product } from "./Product.js";


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

//addQuantityHome button
//aggiunge 1 item alla quantità che sarà inviata al carrello
const addQuantityHome = (index) => {
  let i = index;

//validazione quantità item disponibile
  if(arrayListFruits[index].quantity > arrayListFruits[index].itemToCart){
    arrayListFruits[index].itemToCart += 1;
    arrayListFruits[index].getListHome();
  } else {
    document.querySelector("#modalProduct").style.display = "flex";
    document.querySelector("#modalProductText").innerHTML = "Dispiace, purtroppo non è possibile aggiungere più prodotti";
  }
};

//removeQuantity button
//toglie 1 item alla quantità che sarà inviata al carrello
const removeQuantityHome = (index) => {

//il valore non può essere 0 neanche negativo
  if(arrayListFruits[index].itemToCart <= 1){
    return
  } else {
    arrayListFruits[index].itemToCart -= 1;
    arrayListFruits[index].getListHome();
  }
};

//Insersione onclick="" allo scopo del JS
//Sono pulsanti della pagina con l'evento onclick 
window.addQuantityHome = addQuantityHome;
window.removeQuantityHome = removeQuantityHome;
window.addProductToCart = addProductToCart;
window.addQuantityCart = addQuantityCart;

//Creazione 1° item della pagina e generazione della vetrina e panello adm
const startObject = new Product ("Banana", "Gialla, 12 unità per mazzo e proveniente dalla Costa Rica.", 5, 20, 5, "https://www.nonsprecare.it/wp-content/uploads/2018/12/benefici-delle-banane.jpg", "Un mazzo di banane gialle", 1);
arrayListFruits.push(startObject);
startObject.getListHome();
startObject.getListAdm();
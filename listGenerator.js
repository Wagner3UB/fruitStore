import { arrayListFruits } from "./list.js"

export const listGenerator = () =>{
  let listDisplay = "";

  const listCreator = (item, index) => {
    listDisplay += '<ul>  <li><img src="' 
    + item.img + '" alt="' 
    + item.imgAlt + ' "></li><li><h2>' 
    + item.product + '</h2><p>' 
    + item.description + '</p></li><li class="col-1"><h4>Prezzo:</h4><p>' 
    + item.price + '</p><p>€</p></li><li class="col-1 add"><button onclick="addQuantity(' 
    + index + ')">+</button><p>' 
    + item.quantity +'</p><button onclick="removeQuantity(' 
    + index + ')">-</button></li><li class="col-1 color"><h4>Totale:</h4><p id="totalProduct">'+ (item.price * item.quantity) +'</p><p>€</p></li><li class="col-1 add_to_cart"><button id="add_to_cart"><span class="material-icons-outlined">add_shopping_cart</span></button></li></ul>'
  }
  arrayListFruits.forEach(listCreator);

  document.querySelector("#display").innerHTML = listDisplay;
}

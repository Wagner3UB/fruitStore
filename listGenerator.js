import { arrayListFruits } from "./list.js";

export const listGenerator = () =>{
  let listDisplay = "";
  let listDisplayCart = "";
  let listDisplayAdm = "";

//Home display creator
  const listCreator = (item, index) => {
    listDisplay += '<ul>  <li><img src="' 
    + item.image + '" alt="' 
    + item.imageAlt + ' "></li><li><h2>' 
    + item.product + '</h2><p>' 
    + item.description + '</p></li><li class="col-1"><h4>Prezzo:</h4><p>' 
    + item.price + '</p><p>€</p></li><li class="col-1 add"><button onclick="addQuantity(' 
    + index + ')">+</button><p>' 
    + item.quantity +'</p><button onclick="removeQuantity(' 
    + index + ')">-</button></li><li class="col-1 color"><h4>Totale:</h4><p id="totalProduct">'
    + (item.price * item.quantity) +'</p><p>€</p></li><li class="col-1 add_to_cart"><button id="add_to_cart"><span class="material-icons-outlined">add_shopping_cart</span></button></li></ul>'
  }
  arrayListFruits.forEach(listCreator);

//Cart list creator
/*   const listCartCreator = (item, index) => {
    listDisplayCart += '<ul class="productCartItem"><li>' 
    + item.product +'</li><li class="middleProductCart"><button onclick="addQuantity(' 
    + index + ')">+</button><p>'
    + item.quantity + '</p><button onclick="removeQuantity(' 
    + index + ')">-</button></li><li class="lastProductCart"><p>' 
    + (item.price * item.quantity) + '</p></li></ul>'
  }
  arrayListFruits.forEach(listCartCreator); */

//ADM list creator
  const listAdmCreator = (item, index) => {
    listDisplayAdm += '<ul><li><img src="' 
    + item.image + '" alt="' 
    + item.imageAlt + '"></li><li><h2>'
    + item.product + '</h2><p>' 
    + item.description + '</p></li><li class="col-1"><h4>Prezzo:</h4><p>'
    + item.price + '</p><p>€</p></li><li class="col-1 add"><button onclick="addQuantity(' 
    + index + ')">+</button><p>'
    + item.quantity + '</p><button onclick="removeQuantity(' 
    + index + ')">-</button></li><li class="col-1"><h4>Discount:</h4><p id="discountProduct">'
    + item.discount + '</p><p>%</p></li><li class="col-1"><button class="material-icons-outlined" onclick="deleteItem(' 
    + index +')">remove_circle</button></li></ul>'
  }
  arrayListFruits.forEach(listAdmCreator);

  document.querySelector("#display").innerHTML = listDisplay;
  document.querySelector("#productCart").innerHTML = listDisplayCart;
  document.querySelector("#productAdm").innerHTML = listDisplayAdm;
}

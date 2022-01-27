import { arrayListFruits, arrayCartList } from "./list.js";

export const listGenerator = () =>{
  let listDisplay = "";
  let listDisplayAdm = "";

//Home display creator
  const listCreator = (item, index) => {
    listDisplay += '<ul>  <li><img src="' 
    + item.image + '" alt="' 
    + item.imageAlt + ' "></li><li><h2>' 
    + item.product + '</h2><p>' 
    + item.description + '</p></li><li class="col-1"><h4>Prezzo:</h4><p>' 
    + item.price.toFixed(2) + '</p><p>€</p></li><li class="col-1 add"><button class="addQuantity' + index + '" onclick="addQuantity('+ index +')">+</button><p class="quantityDisplayProduct">'
    + item.itemToCart  + '</p><button class="removeQuantity' + index + '"  onclick="removeQuantity(' + index + ')">-</button></li><li class="col-1 color"><h4>Totale:</h4><p id="totalProduct">'
    + (item.price * item.itemToCart).toFixed(2) +'</p><p>€</p></li><li class="col-1 add_to_cart"><button id="add_to_cart" onclick="addToCart('+ index +')"><span class="material-icons-outlined">add_shopping_cart</span></button></li></ul>'
  }
  arrayListFruits.forEach(listCreator);

//ADM list creator
  const listAdmCreator = (item, index) => {
    listDisplayAdm += '<ul><li><img src="' 
    + item.image + '" alt="' 
    + item.imageAlt + '"></li><li><h2>'
    + item.product + '</h2><p>' 
    + item.description + '</p></li><li class="col-1"><h4>Prezzo:</h4><p>'
    + item.price.toFixed(2) + '</p><p>€</p></li><li class="col-1 add"><button  onclick="addQuantity(' + index + ')">+</button><p>'
    + item.quantity + '</p><button onclick="removeQuantity(' + index + ')">-</button></li><li class="col-1"><h4>Discount:</h4><p id="discountProduct">'
    + item.discount + '</p><p>%</p></li><li class="col-1"><button class="material-icons-outlined" onclick="deleteItem(' + index +')">remove_circle</button></li></ul>'
  }
  arrayListFruits.forEach(listAdmCreator);

  document.querySelector("#display").innerHTML = listDisplay;
  document.querySelector("#productAdm").innerHTML = listDisplayAdm;
};

//Cart list creator
export const listCartGenerator = () => {
  let listDisplayCart = "";

  const listCartCreator = (item, index) => {
    listDisplayCart += '<ul class="productCartItem"><li>' 
    + item.product +'</li><li class="middleProductCart"><button class="addQuantity' + index + '" onclick="addQuantity(' 
    + index + ')">+</button><p>'
    + item.itemToCart+ '</p><button class="removeQuantity' + index + '"  onclick="removeQuantity(' 
    + index + ')">-</button></li><li class="middleProductCart cartProductDiscount">'
    + item.discount +'<p>%</p></li><li class="lastProductCart"><p>' 
    + item.total().toFixed(2) + '</p><p>€</p></li></ul>'
  }
  arrayCartList.forEach(listCartCreator);

  document.querySelector("#productCart").innerHTML = listDisplayCart;
};
import { arrayListFruits} from "./ProductDisplay.js";

export class Product{
  constructor(product, description, price, discount, quantity, image, imageAlt){
    this.product = product;
    this.description = description;
    this.price = parseInt(price);
    this.discount = parseInt(discount);
    this.quantity = parseInt(quantity);
    this.image = image;
    this.imageAlt = imageAlt;
    this.itemToCart = 1
  }
  
//Creazione lista vetrina
  getListHome = () =>{
    let listDisplay = "";
    const getListCreator = (item, index) => {
      listDisplay += '<ul>  <li><img src="' 
      + item.image + '" alt="' 
      + item.imageAlt + ' "></li><li><h2>' 
      + item.product + '</h2><p>' 
      + item.description + '</p></li><li class="col-1"><h4>Prezzo:</h4><p>' 
      + item.price.toFixed(2) + '</p><p>€</p></li><li class="col-1 add"><button onclick="addHome('+ index +')">+</button><p class="quantityDisplayProduct">'
      + item.itemToCart  + '</p><button onclick="removeHome(' + index + ')">-</button></li><li class="col-1 color"><h4>Totale:</h4><p id="totalProduct">'
      + (item.price * item.itemToCart).toFixed(2) +'</p><p>€</p></li><li class="col-1 add_to_cart"><button id="add_to_cart" onclick="toCart('+ index +')"><span class="material-icons-outlined">add_shopping_cart</span></button></li></ul>'
    }
    arrayListFruits.forEach(getListCreator);
    document.querySelector("#display").innerHTML = listDisplay;
  }


//Creazione lista pannello Adm
getListAdm = () => {
  let listDisplayAdm = "";
  const listAdmCreator = (item, index) => {
    listDisplayAdm += '<ul><li><img src="' 
    + item.image + '" alt="' 
    + item.imageAlt + '"></li><li><h2>'
    + item.product + '</h2><p>' 
    + item.description + '</p></li><li class="col-1"><h4>Prezzo:</h4><p>'
    + item.price.toFixed(2) + '</p><p>€</p></li><li class="col-1 add"><button  onclick="addAdm(' + index + ')">+</button><p>'
    + item.quantity + '</p><button onclick="removeAdm(' + index + ')">-</button></li><li class="col-1"><h4>Discount:</h4><p id="discountProduct">'
    + item.discount + '</p><p>%</p></li><li class="col-1"><button class="material-icons-outlined" onclick="deleteAdm(' + index +')">remove_circle</button></li></ul>'
  }
  arrayListFruits.forEach(listAdmCreator);
  document.querySelector("#productAdm").innerHTML = listDisplayAdm;
};
}


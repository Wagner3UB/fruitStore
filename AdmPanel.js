import { arrayListFruits } from "./ProductDisplay.js";

export class AdmPanel {

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
};
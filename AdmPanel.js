import { arrayCartList } from "./CartDisplay.js";
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

  addQuantityAdm = (index) => {
    arrayListFruits[index].quantity += 1;
    if(arrayCartList.length != 0){
      arrayCartList.find(item => item.id === index).quantity += 1;
    }
    this.getListAdm();
  }
  removeQuantityAdm = (index) => {
    if(arrayListFruits[index].quantity <= 0){
      return;
    } else {
      arrayListFruits[index].quantity -= 1;
      if(arrayCartList.length != 0){
        arrayCartList.find(item => item.id === index).quantity -= 1;
      }
      this.getListAdm();
    }
  }

  deleteProductAdm = (index) => {
    console.log(index);
    console.log(arrayListFruits);
    arrayListFruits.splice(index, (index+1));
    this.getListAdm();
  }
};
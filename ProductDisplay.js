"use strict";

import { Product } from "./Product.js";
import { validations, denied, checked } from "./validations.js";
import { AdmPanel } from "./AdmPanel.js";

export let arrayListFruits = [];

export class ProductDisplay {
  //Creazione 1° item della pagina e generazione della vetrina e panello adm
  static startProduct = () => {
    const startObject = new Product ("Banana", "Gialla, 12 unità per mazzo e proveniente dalla Costa Rica.", 5, 20, 5, "https://www.nonsprecare.it/wp-content/uploads/2018/12/benefici-delle-banane.jpg", "Un mazzo di banane gialle", 1);
    arrayListFruits.push(startObject);
    const startObject2 = new Product ("Mango", "Gialla e rosso, 1 unità, +- 300grammi e proveniente dal Brasile.", 10, 10, 10, "https://www.basko.it/p/wp-content/uploads/2021/05/MANGO_900x450px.jpg", "3 manghi, una tagliata in pezzi piccoli", 1);
    arrayListFruits.push(startObject2);
    startObject.getListHome();
    new AdmPanel().getListAdm();
  }

  static get addNewItem() {

    validations();

    let object = new Product(checked[0], checked[1], checked[2], checked[3], checked[4], checked[5], checked[6]);

    if (denied == false) {
      arrayListFruits.push(object);
      object.getListHome();
      new AdmPanel().getListAdm();
      this.clearInput;
    };
  };

  //Clear input
  get clearInput() {
    document.querySelector("#productName").value = "";
    document.querySelector("#productDescription").value = "";
    document.querySelector("#productPrice").value = "";
    document.querySelector("#productDiscount").value = "";
    document.querySelector("#productQuantity").value = "";
    document.querySelector("#productImage").value = "";
    document.querySelector("#productImageAlt").value = "";
  };

  //addQuantityHome button
  //aggiunge 1 item alla quantità che sarà inviata al carrello
  static addQuantityHome = (index) => {

    //validazione quantità item disponibile
    if (arrayListFruits[index].quantity > arrayListFruits[index].itemToCart) {
      arrayListFruits[index].itemToCart += 1;
      arrayListFruits[index].getListHome();
    } else {
      document.querySelector("#modalProduct").style.display = "flex";
      document.querySelector("#modalProductText").innerHTML = "Dispiace, purtroppo non è possibile aggiungere più prodotti";
    }
  };

  //removeQuantity button
  //toglie 1 item alla quantità che sarà inviata al carrello
  static removeQuantityHome = (index) => {

    //il valore non può essere 0 neanche negativo
    if (arrayListFruits[index].itemToCart <= 1) {
      return
    } else {
      arrayListFruits[index].itemToCart -= 1;
      arrayListFruits[index].getListHome();
    }
  };
}
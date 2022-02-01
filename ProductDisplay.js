import { Product } from "./Product.js";
import { validations, denied, checked } from "./validations.js";

export let arrayListFruits = [];

export class ProductDisplay {
  //Creazione 1° item della pagina e generazione della vetrina e panello adm
  startProduct = () => {
  const startObject = new Product ("Banana", "Gialla, 12 unità per mazzo e proveniente dalla Costa Rica.", 5, 20, 5, "https://www.nonsprecare.it/wp-content/uploads/2018/12/benefici-delle-banane.jpg", "Un mazzo di banane gialle", 1);
  arrayListFruits.push(startObject);
  startObject.getListHome();
  startObject.getListAdm();
  }

  get addNewItem() {

    validations();

    let object = new Product(checked[0], checked[1], checked[2], checked[3], checked[4], checked[5], checked[6]);

    if (denied == false) {
      arrayListFruits.push(object);
      object.getListHome();
      object.getListAdm();
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
  addQuantityHome = (index) => {

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
  removeQuantityHome = (index) => {

    //il valore non può essere 0 neanche negativo
    if (arrayListFruits[index].itemToCart <= 1) {
      return
    } else {
      arrayListFruits[index].itemToCart -= 1;
      arrayListFruits[index].getListHome();
    }
  };
}
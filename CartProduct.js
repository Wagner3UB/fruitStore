import { arrayCartList, CartDisplay } from "./CartDisplay.js";
import { arrayListFruits } from "./ProductDisplay.js";
import { AdmPanel } from "./AdmPanel.js";

export class CartProduct {
  constructor(id, product, quantity, price, discount, itemToCart){
    this.id = id;
    this.product = product;
    this.quantity = quantity;
    this.price = price;
    this.discount = discount;
    this.itemToCart = itemToCart
  }

  getDisplayItem = () => {
    let listDisplayCart = "";
  
    const listCartCreator = (item, index) => {
      listDisplayCart += '<ul class="productCartItem"><li>' 
      + item.product +'</li><li class="middleProductCart"><button onclick="removeCart(' + index + ')">-</button><p>'
      + item.itemToCart + '</p><button class="addCart" onclick="addCart(' + index + ')">+</button></li><li class="middleProductCart cartProductDiscount">'
      + item.discount +'<p>%</p></li><li class="lastProductCart"><p>' 
      + item.getTotalProduct.toFixed(2) + '</p><p>€</p></li></ul>';
    }
    arrayCartList.forEach(listCartCreator);
  
    document.querySelector("#productCart").innerHTML = listDisplayCart;
  };  
  
  get getTotalProduct() {
    return (this.price * this.itemToCart)*((100-this.discount)/100);
  };
  
  //addQuantityCart Display button
  addQuantityCart = (index) => {
    if (arrayListFruits.find(item => item.product === arrayCartList[index].product).quantity == 0) {
      document.querySelector("#modalProduct").style.display = "flex";
      document.querySelector("#modalProductText").innerHTML = "Dispiace, purtroppo non abbiamo più di questo prodotto in stock";

    } else if (arrayListFruits.find(item => item.product === arrayCartList[index].product).quantity >= 1) {
      arrayCartList[index].itemToCart += 1;
      arrayListFruits.find(item => item.product === arrayCartList[index].product).quantity -= 1;
      this.refreshCart;
    }
  }; 
  
  removeQuantityCart = (index) => {
    console.log(arrayCartList[index].itemToCart)
    if (arrayCartList[index].itemToCart <= 0) {
      
      this.getDisplayItem(); 
      return;
    } else {
      arrayCartList[index].itemToCart -= 1;
      arrayListFruits.find(item => item.product === arrayCartList[index].product).quantity += 1;
      this.refreshCart;
    }
  }

  //Aggiorna il carrello dopo qualche modifica sulla quantità
  get refreshCart(){
    new CartDisplay().cartNumberDisplay;
    new CartDisplay().getTotalCartValue;
    new AdmPanel().getListAdm();
    this.getDisplayItem(); 
  }
};
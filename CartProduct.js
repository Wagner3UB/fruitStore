import { arrayCartList } from "./CartDisplay.js";
import { arrayListFruits } from "./ProductDisplay.js";

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
      + item.product +'</li><li class="middleProductCart"><button class="addCart" onclick="addCart(' + index + ')">+</button><p>'
      + item.itemToCart + '</p><button onclick="removeQuantityCart(' 
      + item.index + ')">-</button></li><li class="middleProductCart cartProductDiscount">'
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
    if (arrayListFruits[index].quantity == 0) {
      document.querySelector("#modalProduct").style.display = "flex";
      document.querySelector("#modalProductText").innerHTML = "Dispiace, purtroppo non abbiamo più di questo prodotto in stock";
      
    } else if (arrayListFruits[index].quantity >= arrayListFruits[index].itemToCart) {
      arrayListFruits[index].quantity -= 1;
  
      if(arrayCartList.length == 0 || arrayCartList.findIndex(item => item.product === arrayListFruits[index].product) === -1){
        cartProductCreator(index);
        this.cartNumberDisplay;
        arrayCartList[index].getDisplayItem();
        arrayCartList[index].getTotalCartValue();

      } else if (arrayCartList[index].id == index){
        arrayCartList[index].itemToCart += 1;
        this.cartNumberDisplay;
        arrayCartList[index].getDisplayItem();
        this.getTotalCartValue;
      }
    }
  }; 
};

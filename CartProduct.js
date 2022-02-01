import { arrayCartList } from "./list.js";

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
      + this.product +'</li><li class="middleProductCart"><button class="addQuantityCart" onclick="addQuantityCart(' + index + ')">+</button><p>'
      + this.itemToCart + '</p><button onclick="removeQuantityCart(' 
      + this.index + ')">-</button></li><li class="middleProductCart cartProductDiscount">'
      + this.discount +'<p>%</p></li><li class="lastProductCart"><p>' 
      + this.getTotalProduct.toFixed(2) + '</p><p>€</p></li></ul>'
    }
    arrayCartList.forEach(listCartCreator);
  
    document.querySelector("#productCart").innerHTML = listDisplayCart;
  };  
  
  get getTotalProduct() {
    return (this.price * this.itemToCart)*((100-this.discount)/100);
  };

  //Total Value Cart
  getTotalCartValue = () => {
    let totalCartValue = 0;
    arrayCartList.forEach(function (item){
      totalCartValue += item.getTotalProduct;
    });
    document.querySelector("#total").innerHTML = totalCartValue.toFixed(2);
  };
};

export class CartProduct {
  constructor(id, product, quantity, price, discount, itemToCart){
    this.id = id;
    this.product = product;
    this.quantity = quantity;
    this.price = price;
    this.discount = discount;
    this.itemToCart = itemToCart
  }

  getTotal = () => {
    return (this.price * this.itemToCart)*((100-this.discount)/100);
  }
}
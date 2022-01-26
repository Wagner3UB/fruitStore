export class NewProduct{
  constructor(product, description, price, discount, quantity, image, imageAlt){
    this.product = product;
    this.description = description;
    this.price = parseInt(price);
    this.discount = parseInt(discount);
    this.quantity = parseInt(quantity);
    this.image = image;
    this.imageAlt = imageAlt
  }
} 

export class NewCartProduct {
  constructor(id, product, quantity, price){
    this.cartProductId = id;
    this.cartProductName = product;
    this.cartProductQuantity = quantity;
    this.cartProductPrice = price;
  }
}

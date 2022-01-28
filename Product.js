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
} 


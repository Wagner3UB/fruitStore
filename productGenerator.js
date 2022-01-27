export class NewProduct{
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

export class NewCartProduct {
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

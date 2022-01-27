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
    this.cartProductId = id;
    this.cartProductName = product;
    this.cartProductQuantity = quantity;
    this.cartProductPrice = price;
    this.cartProductDiscount = discount;
    this.cartItemToCart = itemToCart
  }
}

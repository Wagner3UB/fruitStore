export let denied = false;

export let checked = [];

export const validations = () => {
  denied = false;

  //product validation
  let alertProduct = "";
  const productInput = document.querySelector("#productName").value;
  const alertProductFunction = () =>{
    (productInput === "") ? alertProduct = "Campo vuoto, riprova" : checked.push(productInput);
    if(alertProduct != ""){
      denied = true;
    };
    document.querySelector(".alertProduct").innerHTML = alertProduct;
  };

  //description validation
  let alertDescription = "";
  const descriptionInput = document.querySelector("#productDescription").value;
  const alertDescriptionFunction = () =>{
    if(descriptionInput === "") {
      alertDescription = "Campo vuoto, riprova";
    } else if (descriptionInput.length <= 20) {
      alertDescription = "Descrizione troppo corta, riprova. (20 char min)";
    } else{
      checked.push(descriptionInput)
    };

    if(alertDescription != ""){
      denied = true;
    };
    document.querySelector(".alertDescription").innerHTML = alertDescription;
  };

  //price validation
  let alertPrice = "";
  const priceInput = document.querySelector("#productPrice").value;
  const alertPriceFunction = () =>{
    if(priceInput === "") {
      alertPrice = "Campo VALORE vuoto, riprova";
    } else if (priceInput < 0) {
      alertPrice = "Il campo VALORE non può essere negativo";
    } else if (priceInput == 0){
      alertPrice = "Il campo VALORE non può essere ZERO";
    } else {
      checked.push(priceInput)
    };

    if(alertPrice != ""){
      denied = true;
    };
    document.querySelector(".alertPrice").innerHTML = alertPrice;
  };

  //Discount validation
  let alertDiscount = "";
  const discountInput = document.querySelector("#productDiscount").value;
  const alertDiscountFunction = () =>{
    if(discountInput === "") {
      alertDiscount = "Campo SCONTO vuoto, riprova";
    } else if (discountInput < 0) {
      alertDiscount = "Il campo SCONTO non può essere negativo";
    } else if (discountInput == 0){
      alertDiscount = "Il campo SCONTO non può essere ZERO";
    } else{
      checked.push(discountInput)
    };

    if(alertDiscount != ""){
      denied = true;
    };
    document.querySelector(".alertDiscount").innerHTML = alertDiscount;
  };

  //Quantity validation
  let alertQuantity = "";
  const quantityInput = document.querySelector("#productQuantity").value;
  const alertQuantityFunction = () =>{
    if(quantityInput === "") {
      alertQuantity = "Campo QUANTITÀ vuoto, riprova";
    } else if (quantityInput < 0) {
      alertQuantity = "Il campo QUANTITÀ non può essere negativo";
    } else if (quantityInput == 0){
      alertQuantity = "Il campo QUANTITÀ non può essere ZERO";
    } else{
      checked.push(quantityInput)
    };

    if(alertQuantity != ""){
      denied = true;
    };
    document.querySelector(".alertQuantity").innerHTML = alertQuantity;
  };

  //Image validation
  let alertImage = "";
  const imageInput = document.querySelector("#productImage").value;
  const alertImageFunction = () =>{
    if(imageInput === "") {
      alertImage = "Campo IMMAGINE vuoto, riprova";
    } else if (imageInput.substring(0,8) !== "https://" && imageInput.substring(0,7) !== "http://") {
      alertImage = "Il campo IMMAGINE deve contenere il link dell'immagine del prodotto e deve iniziare con http:// o https://";
    } else if (imageInput.slice(-4) !== ".jpg" && imageInput.slice(-5) !== ".jpeg" && imageInput.slice(-4) !== ".png"){
      alertImage = "Il file deve essere .jpg, .jpeg oppure .png";
    } else{
      checked.push(imageInput)
    };

    if(alertImage != ""){
      denied = true;
    };
    document.querySelector(".alertImage").innerHTML = alertImage;
  };
  //Text alt validation
  let alertImageAlt = "";
  const imageAltInput = document.querySelector("#productImageAlt").value;
  const alertImageAltFunction = () =>{
    if(imageAltInput === "") {
      alertImageAlt = "Campo TESTO ALT vuoto, riprova";
    } else if (imageAltInput.length <= 20) {
      alertImageAlt = "Il campo TESTO ALT deve avere almeno 20 chars";
    } else if (imageAltInput.length > 125){
      alertImageAlt = "Il campo TESTO ALT non può contenere più da 125 chars";
    } else{
      checked.push(imageAltInput)
    };

    if(alertImageAlt != ""){
      denied = true;
    };
    document.querySelector(".alertImageAlt").innerHTML = alertImageAlt;
  };

  alertProductFunction();
  alertDescriptionFunction();
  alertPriceFunction();
  alertDiscountFunction();
  alertQuantityFunction();
  alertImageFunction();
  alertImageAltFunction();
}
export let denied = false;

export let checked = [];

export const validations = () => {
  denied = false;

  //product validation
  let alertProduct = "";
  const productInput = document.querySelector("#productName").value;
  const alertProductFunction = () =>{
    (productInput === "") ? alertProduct = "campo vuoto, riprova" : checked.push(productInput);
    if(alertProduct != ""){
      denied = true;
    };
    document.querySelector(".alertProduct").innerHTML = alertProduct;
  }

  //description validation
  let alertDescription = "";
  const descriptionInput = document.querySelector("#productDescription").value;
  const alertDescriptionFunction = () =>{
    (productInput === "") ? alertDescription = "campo vuoto, riprova" : checked.push(descriptionInput);
    if(alertProduct != ""){
      denied = true;
    };
    document.querySelector(".alertDescription").innerHTML = alertProduct;
  }





  alertProductFunction();
  alertDescriptionFunction();
}
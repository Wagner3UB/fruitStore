import { listGenerator } from "./listGenerator.js";
import { addNewItem } from "./addProduct.js";

listGenerator();

//open cart
const cartDisplayOn = () => {
  document.querySelector('#cart').style.display = 'flex';
}
document.querySelector("#cartDisplay").addEventListener("click", cartDisplayOn);
//close cart
const cartDisplayOff = () => {
  document.querySelector('#cart').style.display = 'none';
}
document.querySelector(".cartClose").addEventListener("click", cartDisplayOff);
//open adm panel
const admDisplayOn = () => {
  document.querySelector('#admPanel').style.display = 'flex';
}
document.querySelector(".openPanel").addEventListener("click", admDisplayOn);
//close adm panel
const admDisplayOff = () => {
  document.querySelector('#admPanel').style.display = 'none';
}
document.querySelector(".closePanel").addEventListener("click", admDisplayOff);


document.getElementById("productAdd").addEventListener("click", addNewItem);


/* 
product cart home
<ul class="productCartItem">
  <li>Nome del prodotto</li>
  <li class="middleProductCart"><button>+</button><p>0</p><button>-</button></li>
  <li class="lastProductCart"><p>00,00</p></li>
</ul> */

/*
Product display ADM  
<ul>
  <li><img src="https://www.nonsprecare.it/wp-content/uploads/2018/12/benefici-delle-banane.jpg" alt="3 banane gialle"></li>
  <li><h2>Nome della Frutta</h2><p>Descrizione, come collore, taglia, peso, etc.</p></li>
  <li class="col-1"><h4>Prezzo:</h4><p>00,00</p><p>€</p></li>
  <li class="col-1 add"><button>+</button><p>0</p><button>-</button></li>
  <li class="col-1"><h4>Discount</h4><p id="discountProduct">20</p><p>%</p></li>
  <li class="col-1"><button class="material-icons-outlined">remove_circle</button></li>
</ul> */

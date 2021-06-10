let respondId = localStorage.getItem("orderId")
let respondPrice = localStorage.getItem("monPanier")

console.log(respondId);

function clear() {
    document.querySelector("main").innerHTML +=
    `
    
     <div class="col text-center">
     <p>Votre n° de commande est le :  <span >${respondId}</span></p>
   <p>Le prix facturé est de :  <span >${respondPrice}</span>€</p>
   <p>Nous vous remercions et à bientôt !</p>
   </div>


     `;
     localStorage.clear();

}

clear();


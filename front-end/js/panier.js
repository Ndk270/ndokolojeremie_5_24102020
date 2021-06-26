let panier;
let test = document.querySelector('.test');
let prixTotalCalcul = [];
let products = [];
let prixTotal;


if ("monPanier" in localStorage) {
  panier = JSON.parse(localStorage.getItem("monPanier"));

  console.log(panier);

} else {
  panier = [];

}
//console.log(panier);

if ("monPanier" in localStorage != 0) {
  console.log("je suis remplie");
  template();
  deleteBtn();
  displayPrice();

} else {
  console.log("je suis vide");
  document.getElementById("empty_cart").innerHTML += ` <h1> votre panier est vide </h1>`;
  document.querySelector(".totaux").innerHTML +=  ` <span >Total: (EUR)</span> `

}
/////////////////////////////////////////////////////////////////////

function template() {
  let template = document.createElement('div');
  template.className = "template";
  for (let i = 0; i < panier.length; i++){
    let imageUrl = panier[i].imageUrl; // <-- attribution de leur valeur dynamiquement
    let name = panier[i].name;
    let price = panier[i].price;
    let lenses = panier[i].lenses;

    let article =
    `<article>
        <div>
        <h3>${name}</h3>
            <img class="article__img" src=${imageUrl} alt=${name}>
        </div>
        <div>
            <p>Lense : <span>${lenses}</span></p>
            <p>Prix : <span class="articlePrice">${price}</span></p>
        </div>
        <div>
            <button class="btn sup">
                <i class="far fa-trash-alt"></i>
            </button>
        </div>
    </article>`;

template.innerHTML += article;



  }
  
    // Insertion au HTML + appel fonction prix total
    test.appendChild(template);

}
/////////////////////////////////////////////////////////////////////

function deleteBtn() {
  let deleteBtns = document.querySelectorAll('.sup');
for (let i = 0; i < deleteBtns.length; i++) {
        deleteBtns[i].addEventListener('click', () => {
            panier.splice(i, 1);
            localStorage.setItem('monPanier', JSON.stringify(panier));
        
            // Si le panier est vide on vide le localStorage
            if (panier.length < 1) {
                localStorage.removeItem('monPanier');
            }

            // Rafraîchissement de la page
            window.location.reload();
        })
}
}


/////////////////////////////////////////////////////////////////////

function displayPrice() {
  for (let i = 0; i < panier.length; i++) {
    let  prixTotalDansLePanier = panier[i].price;
    
    let pri = parseFloat(prixTotalDansLePanier) // transformation des chaines de caractère en number grace au parseFloat()
    
    
    // Mettre les prix dans la variable totalPrice avec la méthode PUSH
    prixTotalCalcul.push(pri)
     // console.log(prixTotalCalcul);
      
    }
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
       prixTotal = prixTotalCalcul.reduce(reducer, 0);
     console.log(prixTotal);

     document.querySelector(".totaux").innerHTML +=  
     `
     <span >Total: ${prixTotal} (EUR)</span>


     `
}


/////////////////////////////////////////////////////////////////////

const btnEnvoyer = document.querySelector("#btnForm");
// console.log(btnEnvoyer);




btnEnvoyer.addEventListener("click", () =>{
  panier = JSON.parse(localStorage.getItem("monPanier"));
  console.log(panier);

    const aEnvoyer = {
    contact: {} ,
    products: [],
    // panier
  };
  
  for (value of panier) {
    aEnvoyer.products.push(panier)
    products.push(value.cameraId)  
    

 
  };
  console.log(aEnvoyer.products);
  console.log(products);


  //  récupération valeur du formulaire
contact = {
    firstName : document.querySelector("#firstName").value ,
    lastName : document.querySelector("#lastName").value ,
    city : document.querySelector("#city").value ,
    address : document.querySelector("#address").value ,
    email : document.querySelector("#email").value,

  };
  console.log(contact);
 // collectOrder(contact, products);

    fetch('http://localhost:3000/api/cameras/order', {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ contact, products })
})
  .then(response => response.json())
  .then(function(order) {
    
    localStorage.setItem("orderId", order.orderId)
    localStorage.setItem("monPanier", prixTotal)
  })

  // Effaçons le panier vu que la commande est passée
  localStorage.removeItem('monPanier');
  // Ouverture de la page de confirmation
  location.replace("confirmation.html")

  

});












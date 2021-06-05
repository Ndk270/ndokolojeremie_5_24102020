let panier;
let test = document.querySelector('.test');
let prixTotalCalcul = [];



if ("monPanier" in localStorage) {
  panier = JSON.parse(localStorage.getItem("monPanier"));


} else {
  panier = [];

}
console.log(panier);

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
            <button class="btn">
                <i class="far fa-trash-alt"></i>
            </button>
        </div>
    </article>`;

template.innerHTML += article;

  }
  
    // Insertion au HTML + appel fonction prix total
    test.appendChild(template);

}

function deleteBtn() {
  let deleteBtns = document.querySelectorAll('.btn');
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






function displayPrice() {
  for (let i = 0; i < panier.length; i++) {
    let  prixTotalDansLePanier = panier[i].price;
    
    let pri = parseFloat(prixTotalDansLePanier) // transformation des chaines de caractère en number grace au parseFloat()
    
    
    // Mettre les prix dans la variable totalPrice avec la méthode PUSH
    prixTotalCalcul.push(pri)
     // console.log(prixTotalCalcul);
      
    }
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      const prixTotal = prixTotalCalcul.reduce(reducer, 0);
     console.log(prixTotal);

     document.querySelector(".totaux").innerHTML +=  
     `
     <span >Total: ${prixTotal} (EUR)</span>


     `
}



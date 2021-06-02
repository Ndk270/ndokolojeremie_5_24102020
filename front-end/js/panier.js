let panier;

if ("monPanier" in localStorage) {
  panier = JSON.parse(localStorage.getItem("monPanier"));


} else {
  panier = [];

}
console.log(localStorage);
// Récuperation de l'Id de l'url

function getCamCurrentUrl(){
    const queryString = window.location.search;
//    console.log(queryString);
    const urlParms = new URLSearchParams(queryString);
    const cameraId = urlParms.get("id");
//    console.log(cameraId);
    return cameraId
}

const cameraId = getCamCurrentUrl();
//console.log(cameraId);
 

//  fonction productCam qui récupère les produit unique reçu par le loadCam et ensuite les display sur produit.html 
async function productCam(cameraId) {
  const product = await loadCam(cameraId)
  console.log(product.name);
  displayCamera(product); //  fonction displayCamera qui affiche dans la page produit.html
}
productCam(cameraId);


//  fonction loadCam qui récupère les données 
async function loadCam(cameraId) {
  return   fetch("http://localhost:3000/api/cameras/" + cameraId) // Requête GET pour Récupérer les Données 
    .then(function(res) {
      return res.json()
    })
    .then(function(articles) {
      return articles
    })
    .catch(function(error) {
      alert(error)
    })
}
let test = loadCam(cameraId);
//console.log(test.name);


// Fonction qui aide a display les données récupéré 
function displayCamera(product) {
  // Selection des balises dans le html et préparation a l'injection dans le produit.html
    document.getElementById('produit_img').setAttribute('src', product.imageUrl);
    document.querySelector('.produit_name').textContent = product.name;
    document.querySelector('.produit_description').textContent = product.description; 
    document.querySelector('.produit_price').textContent = product.price + ' €';


    const lenses = product.lenses
    for(lense of lenses ){
      document.getElementById('lenses').innerHTML += lense + ' ';
    }
    
}









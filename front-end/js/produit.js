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
 
async function productCam(cameraId) {
  const product = await loadCam(cameraId)
  console.log(product.name);
  displayCamera(product);
}
productCam(cameraId);

async function loadCam(cameraId) {
  return   fetch("http://localhost:3000/api/cameras/" + cameraId)
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
let j = loadCam(cameraId);
//console.log(j.name);

function displayCamera(product) {
    document.getElementById('produit_img').setAttribute('src', product.imageUrl);
    document.querySelector('.produit_name').textContent = product.name;
    document.querySelector('.produit_price').textContent = product.price + ' €';


    const lenses = product.lenses
    for(lense of lenses ){
      document.getElementById('lenses').innerHTML += lense + ' ';
    }
    
}






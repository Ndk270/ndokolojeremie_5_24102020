

// Requête GET pour Récupérer les Données 
fetch("http://localhost:3000/api/cameras")

    .then(response => response.json()) // transforme la réponse en JSON
    
    .then((data) =>  {
        for (let i = 0; i < data.length; i++)  { // <-- lance la  boucle FOR

// Déclaration de toutes les variables issue du tableau [i] nécessaires pour afficher dans le html  
            let name = data[i].name;       
            let imageUrl = data[i].imageUrl; // <-- attribution de leur valeur dynamiquement
            let description = data[i].description;      
            let price = data[i].price / 100; 
            let id = data[i]._id; 

    
    document.getElementById("main").innerHTML +=          // <-- intégration au HTML

    `   
    
    <div class="card text-center text-white bg-dark mt-4 " style="width: 18rem;" id="cc">
        <img class="card-img-top" src="${imageUrl}" alt="image d'une camera" id="imgUrl">
            <div class="card-body">
                <h2 class="card-title" id="name">${name}</h2>
                <p class="card-text" id="price">${price}€</p>
                <p class="card-text" id="description">${description}</p>
                <a href="produit.html?id=${id}"" id="blog__link" class="btn btn-primary">Voir l'article</a>
            </div>
    </div>      

    `


    }
        
    })
    .catch((err) => {                                  
        console.log(err + " " + "Erreur"); // <-- Affiche "Error" si il y a un Problème 
    })


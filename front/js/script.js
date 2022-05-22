


  const kanap = fetch("http://localhost:3000/api/products"); //requete API 

kanap.then((response) => {
    let kanapprom = response.json();
    kanapprom.then((kanaptabs) => { // tableau à boucler par index
        for (let k = 0; k < kanaptabs.length; k++) {
            let produit = new Object() //creation de variable avec les caracteristiques du produit
            produit.id = kanaptabs[k]['_id']
            produit.imageUrl = kanaptabs[k]['imageUrl']
            produit.alttxt = kanaptabs[k]['altTxt']
            produit.name = kanaptabs[k]['name']
            produit.description = kanaptabs[k]['description']
            document.getElementById('items').innerHTML += //ajout du code HTML commenté avec les caracteristiques des produits précedemment créés[===>ligne 5]
                '<a href="./product.html?id=' + produit.id + '">' +
                '<article>' +
                '<img src="' + produit.imageUrl + '" alt="' + produit.alttxt + '">' +
                '<h3 class="productName">' + produit.name + '</h3>' +
                '<p class="productDescription">' + produit.description + '</p>' +
                '</article>' +
                '</a>'
        }
    })
}).catch((err) => { //si requete impossible affichage message d'erreur 
    document.getElementById('items').innerHTML = 'Désolé un problème est survenu pendant le chargement de notre catalogue.Veuillez réessayer ultérieurement'
    console.log('Problème API');
});
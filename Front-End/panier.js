/*
let data = localStorage.getItem("panier");
let objetPanier = JSON.parse(data);

function fillPanier() {
    document.getElementById("article").innerHTML = teddiesName;
    document.getElementById("couleur").innerHTML = teddiesColor;
    document.getElementById("prix").innerHTML = teddiesPrice;
    document.getElementById("quantité").innerHTML = teddiesQuant;
}

fillPanier();
*/

//Variable contenant les produits dans le localStorage
let panier = JSON.parse(localStorage.getItem("panier"));

// injecter les produits dans le panier

if (panier === null) {
    console.log("panier vide");
} else {
    for (let i = 0; i < panier.length; i++) {
        document.getElementById("article").innerHTML = panier[1].teddiesName;
        document.getElementById("couleur").innerHTML = panier[1].teddiesColor;
        document.getElementById("prix").innerHTML = panier[1].teddiesPrice;
        document.getElementById("quantité").innerHTML = panier[1].teddiesQuant;
    }
}

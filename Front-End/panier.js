let data = localStorage.getItem("panier");
let objetPanier = JSON.parse(data);

function fillPanier() {
    document.getElementById("article").innerHTML = teddiesName;
    document.getElementById("couleur").innerHTML = teddiesColor;
    document.getElementById("prix").innerHTML = teddiesPrice;
    document.getElementById("quantité").innerHTML = teddiesQuant;
}

fillPanier();

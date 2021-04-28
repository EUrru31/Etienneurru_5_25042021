let data_json = localStorage.getItem("objet");
let objetPanier = JSON.parse(data_json);

function fillPanier() {
    document.getElementById("article").innerHTML = objetPanier.teddiesName;
    document.getElementById("couleur").innerHTML = objetPanier.teddiesColor;
    document.getElementById("prix").innerHTML = objetPanier.teddiesPrice;
    document.getElementById("quantité").innerHTML = objetPanier.teddiesQuant;
}

fillPanier();

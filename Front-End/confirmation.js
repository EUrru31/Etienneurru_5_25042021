//Variable récupérant les produits dans le localStorage
let infosOrder = JSON.parse(localStorage.getItem("infos"));

// injecter les produits dans le panier

function fillCustomer() {
    document.getElementById("nom").innerText = infosOrder[i].customerName;
    document.getElementById("prenom").innerText =
        infosOrder[0].customerFirstName;
    document.getElementById("mail").innerText = infosOrder[i].customerEmail;
}

fillCustomer();

// Nombre de produit dans le localStorage
let countCart = JSON.parse(localStorage.getItem("panier"));

// Remplissage du nombre de produit dans le panier

countCartNumber();
function countCartNumber() {
    if (countCart != null) {
        document.getElementById("cartQuant").innerText = countCart.length;
    } else {
        document.getElementById("cartQuant").innerText = "0";
    }
}

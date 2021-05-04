//Variable récupérant les produits dans le localStorage
let infosOrder = JSON.parse(localStorage.getItem("infos"));

// injecter les produits dans le panier

function fillCustomer() {
    document.getElementById("nom").innerText = infosOrder[0].customerName;
    document.getElementById("prenom").innerText =
        infosOrder[0].customerFirstName;
    document.getElementById("mail").innerText = infosOrder[0].customerEmail;
}

fillCustomer();

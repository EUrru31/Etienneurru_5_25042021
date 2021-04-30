//Variable récupérant les produits dans le localStorage
let infosOrder = JSON.parse(localStorage.getItem("infos"));
console.log("infos");

// injecter les produits dans le panier

function fillCustomer() {
    document.getElementById("nom").innerText = infos[i].customerName;
    document.getElementById("prénom").innerHTML = infos[i].customerFirstName;
    document.getElementById("mail").innerHTML = infos[i].customerEmail;
}

fillCustomer();

//Variable contenant les produits dans le localStorage
let panier = JSON.parse(localStorage.getItem("panier"));

// injecter les produits dans le panier

if (panier === null) {
    console.log("panier vide");
} else {
    for (let i = 0; i < panier.length; i++) {
        document.getElementById("article").innerHTML = panier[i].teddiesName;
        document.getElementById("couleur").innerHTML = panier[i].teddiesColor;
        document.getElementById("prix").innerHTML = panier[i].teddiesPrice;
        document.getElementById("quantité").innerHTML = panier[i].teddiesQuant;
    }
}

// Controle du formulaire

let form = document.querySelector("#loginForm");

form.email.addEventListener("change", function () {
    validEmail(this);
});

const validEmail = function (inputEmail) {
    let emailRegExp = new RegExp(
        "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]2,10}$",
        "g"
    );

    // Récupération de la balise small
    let small = inputEmail.nextElementSibling;

    // Test de l'expression régulière

    if (emailRegExp.test(inputEmail.value)) {
        small.innerHTML = "Adresse Valide";
        small.classList.remove("text-danger");
        small.classList.add("text-success");
        return true;
    } else {
        small.innerHTML = "Adresse Non-valide";
        small.classList.remove("text-success");
        small.classList.add("text-danger");
        return false;
    }
};

// Envoie du formulaire au localStorage pour page de confirmation

form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (valideEmail(form.email)) {
        form.submit();
    }
});

const confirmOrder = document.getElementById("orderCommand");
confirmOrder.addEventListener("click", (e) => {
    e.preventDefault();

    const customerInformations = {
        customerName: document.getElementById("lastName").value,
        customerFirstName: document.getElementById("firstName").value,
        customerEmail: document.getElementById("email").value,
    };

    const infosOrder =
        localStorage.getItem("infos") === null
            ? []
            : JSON.parse(localStorage.getItem("infos"));

    infosOrder.push(customerInformations);
    localStorage.setItem("infos", JSON.stringify(infosOrder));
});

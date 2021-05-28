//Import du compteur panier
import { order } from "./helpers/backend.js";
import { countCartNumber, setCart, getCart } from "./helpers/cart.js";

countCartNumber();
fillSummary();
setupFormValidator();
setupOrderButton();
setupEmptyCartButton();

// injecter les produits dans le panier

function fillSummary() {
    //Variable contenant les produits dans le localStorage
    let panier = getCart();
    let totalPrice = 0;
    //injecter les produits dans le panier
    //calcule du total
    for (const teddy of panier) {
        addProductToSummary(teddy);
        totalPrice += teddy.teddiesPrice;
    }
    document.getElementById("total").innerText = totalPrice;
}

//Ajout des produit au tableau du panier
function addProductToSummary(teddy) {
    const templateElt = document.getElementById("row-template");
    const cloneElt = document.importNode(templateElt.content, true);

    cloneElt.getElementById("article").textContent = teddy.teddiesName;
    cloneElt.getElementById("couleur").textContent = teddy.teddiesColor;
    cloneElt.getElementById("quantité").textContent = teddy.teddiesQuant;
    cloneElt.getElementById("prix").textContent =
        teddy.teddiesPrice + " " + "€";

    document.getElementById("cart-tablebody").appendChild(cloneElt);
}

// Controle du formulaire
function setupFormValidator() {
    let form = document.getElementById("loginForm");

    form.email.addEventListener("change", function () {
        validEmail(this);
    });
    form.firstName.addEventListener("change", function () {
        validFormulaire(this);
    });
    form.lastName.addEventListener("change", function () {
        validFormulaire(this);
    });
    form.phone.addEventListener("change", function () {
        validNumber(this);
    });
    form.city.addEventListener("change", function () {
        validFormulaire(this);
    });
    form.zip.addEventListener("change", function () {
        validNumber(this);
    });
}

function validFormulaire() {
    let textRegExp = new RegExp("^[a-zA-Z]{2,20}$", "g");

    let small = inputText.nextElementSibling;

    if (textRegExp.test(inputEmail.value)) {
        small.innerHTML = "Champ valide";
        small.classList.remove("text-danger");
        small.classList.add("text-success");
        return true;
    } else {
        small.innerHTML = "Champ Non-valide";
        small.classList.remove("text-success");
        small.classList.add("text-danger");
        return false;
    }
}

function validNumber() {
    let numberRegExp = new RegExp("^[0-9]{5,12}$", "g");

    let small = inputTel.nextElementSibling;

    if (numberRegExp.test(inputEmail.value)) {
        small.innerHTML = "Champ valide";
        small.classList.remove("text-danger");
        small.classList.add("text-success");
        return true;
    } else {
        small.innerHTML = "Champ Non-valide";
        small.classList.remove("text-success");
        small.classList.add("text-danger");
        return false;
    }
}

function validEmail(inputEmail) {
    let emailRegExp = new RegExp(
        "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-zA-Z]{2,10}$",
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
}

// Paramétrage du bouton de passage de commande
function setupOrderButton() {
    const form = document.getElementById("loginForm");
    const confirmOrder = document.getElementById("orderCommand");

    confirmOrder.addEventListener("click", (e) => {
        e.preventDefault();

        if (!validEmail && !validFormulaire && !validNumber(form.email)) {
            alert("email invalide");
            return;
        }

        const customerInformations = {
            lastName: document.getElementById("lastName").value,
            firstName: document.getElementById("firstName").value,
            email: document.getElementById("email").value,
            address: document.getElementById("address").value,
            city: document.getElementById("city").value,
        };

        const panier = getCart();
        const idsArray = panier.map((teddy) => teddy.teddiesId);

        order(customerInformations, idsArray).then((response) => {
            console.log(response);
            window.location.href =
                "confirmation.html?orderId=" +
                response.orderId +
                "&name=" +
                customerInformations.firstName;
            setCart([]);
        });
    });
}

// Envoie du formulaire au localStorage pour page de confirmation

// Vider le panier
function setupEmptyCartButton() {
    const emptyCart = document.getElementById("emptyCart");
    emptyCart.addEventListener("click", (e) => {
        e.preventDefault();
        setCart([]);
        alert("Panier vidé");
        window.location.href = "index.html";
    });
}

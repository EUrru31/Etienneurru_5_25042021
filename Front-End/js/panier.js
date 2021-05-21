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

function setupFormValidator() {
    let form = document.getElementById("loginForm");

    form.email.addEventListener("change", function () {
        validEmail(this);
    });
}

// Controle du formulaire

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

function setupOrderButton() {
    const form = document.getElementById("loginForm");
    const confirmOrder = document.getElementById("orderCommand");

    confirmOrder.addEventListener("click", (e) => {
        e.preventDefault();

        if (!validEmail(form.email)) {
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

main();

async function main() {
    const teddies = await getAllTeddies();

    for (const teddy of teddies) {
        displayTeddy(teddy);
    }
}

import { countCartNumber } from "/carthelper.js";
countCartNumber();

// Récupération de la base de donnée grace à la méthode fetch
async function getAllTeddies() {
    return fetch("http://localhost:3000/api/teddies")
        .then((httpBodyResponse) => {
            return httpBodyResponse.json();
        })
        .then((teddies) => {
            return teddies;
        })
        .catch((error) => {
            alert("Connexion échouée !");
        });
}

// Alimentation du template HTML
function displayTeddy(teddy) {
    const templateElt = document.getElementById("templateTeddy");
    const cloneElt = document.importNode(templateElt.content, true);

    cloneElt.getElementById("teddiesName").textContent = teddy.name;

    cloneElt.getElementById("teddiesPrice").textContent =
        teddy.price / 100 + ".00" + " " + "€";
    cloneElt
        .getElementById("teddiesImageUrl")
        .setAttribute("src", teddy.imageUrl);

    cloneElt
        .getElementById("teddiesUrl")
        .setAttribute("href", "pageproduit.html?id=" + teddy._id);

    document.getElementById("main").appendChild(cloneElt);
}

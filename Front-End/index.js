main();

async function main() {
    const teddies = await getAllTeddies();

    for (teddy of teddies) {
        displayTeddy(teddy);
    }
}

// Récupération de la base de donnée
async function getAllTeddies() {
    return fetch("http://localhost:3000/api/teddies")
        .then(function (httpBodyResponse) {
            return httpBodyResponse.json();
        })
        .then(function (teddies) {
            return teddies;
        })
        .catch((error) => {
            alert("Connexion échouée !");
        });
}

// Alimentation du template
function displayTeddy(teddy) {
    const templateElt = document.getElementById("templateTeddy");
    const cloneElt = document.importNode(templateElt.content, true);

    cloneElt.getElementById("teddies__name").textContent = teddy.name;
    cloneElt.getElementById("teddies__description").textContent =
        teddy.description;
    cloneElt.getElementById("teddies__price").textContent = teddy.price;
    cloneElt.getElementById("teddies__imageUrl").src = teddy.imageUrl;

    cloneElt
        .getElementById("teddies__url")
        .setAttribute(
            "src",
            "http://127.0.0.1:5500/pageproduit.html&id=" + teddy.id
        );

    document.getElementById("main").appendChild(cloneElt);

    //const euro =new Intl.NumberFormat('fr', { style: 'currency', currency: 'EUR' }).format(number));
}

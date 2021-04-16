main();

async function main() {
    const teddies = await getAllTeddies();

    for (teddy of teddies) {
        displayTeddy(teddy);
    }
}

function getAllTeddies() {
    return fetch("http://localhost:3000/api/teddies")
        .then(function (httpBodyResponse) {
            return httpBodyResponse.json();
        })
        .then(function (teddies) {
            return teddies;
        });
}

function displayTeddy() {
    const templateElt = document.getElementById("templateTeddy");
    const cloneElt = document.importNode(templateElt.content, true);

    cloneElt.getElementById("teddies__name").textContent = teddies.name;
    cloneElt.getElementById("teddies__description").textContent =
        teddies.description;
    cloneElt.getElementById("teddies__price").textContent = teddies.price;

    document.getElementById("main").appendChild(cloneElt);
}

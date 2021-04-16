main();

async function main() {
    const teddies = await getAllTeddies();

    for (teddy of teddies) {
        displayTeddy(teddy);
    }
}

async function getAllTeddies() {
    return fetch("http://localhost:3000/api/teddies")
        .then(function (httpBodyResponse) {
            return httpBodyResponse.json();
        })
        .then(function (teddies) {
            return teddies;
        });
}

function displayTeddy(teddy) {
    const templateElt = document.getElementById("templateTeddy");
    const cloneElt = document.importNode(templateElt.content, true);

    cloneElt.getElementById("teddies__name").textContent = teddy.name;
    cloneElt.getElementById("teddies__description").textContent =
        teddy.description;
    cloneElt.getElementById("teddies__price").textContent = teddy.price;
    /*cloneElt.getElementById("teddies__imageUrl").setAttribute("");
    cloneElt.getElementById("teddies__url").setAttribute();*/

    document.getElementById("main").appendChild(cloneElt);
}

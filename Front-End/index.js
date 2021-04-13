/*Lien avec l'API */

main();

async function main() {
    const teddies = await getAllTeddies();
    for (teddy of teddies) {
        displayTeddies(teddies);
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
function displayTeddies(teddies) {
    const templateElt = document.getElementById("template");
}

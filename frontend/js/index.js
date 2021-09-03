import { countCartNumber } from "./helpers/cart.js";
import { getAllTeddies } from "./helpers/backend.js";

main();
countCartNumber();

async function main() {
    const teddies = await getAllTeddies();

    for (const teddy of teddies) {
        displayTeddy(teddy);
    }
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

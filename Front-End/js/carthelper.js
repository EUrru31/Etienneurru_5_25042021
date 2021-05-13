// Nombre de produit dans le localStorage
let countCart = JSON.parse(localStorage.getItem("panier"));

// Remplissage du nombre de produit dans le panier

export function countCartNumber() {
    if (countCart != null) {
        document.getElementById("cartQuant").innerText = countCart.length;
    } else {
        document.getElementById("cartQuant").innerText = "0";
    }
}

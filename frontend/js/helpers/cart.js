const cartLocalStorageKey = "panier";

// Remplissage du nombre de produit dans le panier
export function countCartNumber() {
    // Nombre de produit dans le localStorage
    let cart = getCart();
    document.getElementById("cartQuant").innerText = cart.length;
}

//Récupération du panier dans le localStorage
export function getCart() {
    let cart = JSON.parse(localStorage.getItem(cartLocalStorageKey));
    if (cart === null) cart = [];

    return cart;
}

export function setCart(cart) {
    localStorage.setItem(cartLocalStorageKey, JSON.stringify(cart));
}

//Variable contenant les produits dans le localStorage
let panier = JSON.parse(localStorage.getItem("panier"));

// injecter les produits dans le panier

if (panier === null) {
    console.log("panier vide");
} else {
    for (let i = 0; i < panier.length; i++) {
        document.getElementById("article").innerHTML = panier[i].teddiesName;
        document.getElementById("couleur").innerHTML = panier[i].teddiesColor;
        document.getElementById("prix").innerHTML = panier[i].teddiesPrice;
        document.getElementById("quantité").innerHTML = panier[i].teddiesQuant;
    }
}

// Envoie du formulaire au sessionStorage pour page de confirmation

const confirmOrder = document.getElementById("orderCommand");
confirmOrder.addEventListener("click", (e) => {
    e.preventDefault();

    const customerInformations = {
        customerName: document.getElementById("lastName").value,
        customerFirstName: document.getElementById("firstName").value,
        customerEmail: document.getElementById("email").value,
        /*commandNumber = function strRandom(o) { // Générateur de numéro de commande
            var a = 15,
                b = "abcdefghijklmnopqrstuvwxyz",
                c = "",
                d = 0,
                e = "" + b;
            if (o) {
                if (o.startsWithLowerCase) {
                    c = b[Math.floor(Math.random() * b.length)];
                    d = 1;
                }
                if (o.length) {
                    a = o.length;
                }
                if (o.includeUpperCase) {
                    e += b.toUpperCase();
                }
                if (o.includeNumbers) {
                    e += "1234567890";
                }
            }
            for (; d < a; d++) {
                c += e[Math.floor(Math.random() * e.length)];
            }
            return c;
        }*/
    };

    const infosOrder =
        localStorage.getItem("infos") === null
            ? []
            : JSON.parse(localStorage.getItem("infos"));

    infosOrder.push(customerInformations);
    localStorage.setItem("infos", JSON.stringify(infosOrder));
});

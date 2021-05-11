// Récupération des données des oursons grace à leurs ID
fillProductInformation();

function fillProductInformation() {
    const url = new URL(window.location.href);
    const teddyID = url.searchParams.get("id");

    fetch("http://localhost:3000/api/teddies/" + teddyID)
        .then(function (httpResponse) {
            return httpResponse.json();
        })
        .then(function (teddy) {
            addProduct(teddy);
        });

    setupButton(teddyID);
}

// Implantation des informations des ours
function addProduct(teddy) {
    document.getElementById("teddiesName").innerHTML = teddy.name;
    document.getElementById("teddiesDescription").innerHTML = teddy.description;
    document.getElementById("teddiesPrice").innerHTML =
        teddy.price / 100 + ".00" + " " + "€";
    document.getElementById("teddiesImage").setAttribute("src", teddy.imageUrl);

    addOption(teddy);
}

// Implantation des couleurs dans un menu déroulant
function addOption(teddy) {
    const select = document.getElementById("options");
    const colors = teddy.colors;

    for (let i = 0; i < colors.length; i++) {
        let col = colors[i];
        let opt = document.createElement("option");
        opt.textContent = col;
        opt.value = col;
        select.add(opt);
    }
}

//Envoi des données au localStorage

function setupButton(teddyID) {
    const btn = document.getElementById("validationPanier");
    btn.addEventListener("click", (e) => {
        e.preventDefault();

        const teddy = {
            teddiesName: document.getElementById("teddiesName").textContent,
            teddiesColor: document.getElementById("options").value,
            teddiesQuant: document.getElementById("teddiesQuantité").value,
            teddiesPrice: document.getElementById("teddiesPrice").innerHTML,
            teddiesId: teddyID,
        };

        const panier =
            localStorage.getItem("panier") === null
                ? []
                : JSON.parse(localStorage.getItem("panier"));

        panier.push(teddy);
        localStorage.setItem("panier", JSON.stringify(panier));

        window.location.reload();
    });
}

// Nombre de produit dans le localStorage
let countCart = JSON.parse(localStorage.getItem("panier"));

// Remplissage du nombre de produit dans le panier

countCartNumber();
function countCartNumber() {
    if (countCart != null) {
        document.getElementById("cartQuant").innerText = countCart.length;
    } else {
        document.getElementById("cartQuant").innerText = "0";
    }
}

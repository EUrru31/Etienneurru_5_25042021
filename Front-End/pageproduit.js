fillProductInformation();

function fillProductInformation() {
    const url = new URL(window.location.href);
    const teddyID = url.searchParams.get("id");

    fetch("http://localhost:3000/api/teddies/" + teddyID)
        .then(function (httpResponse) {
            return httpResponse.json();
        })
        .then(function (teddy) {
            fillProduct(teddy);
        });
}

function fillProduct(teddy) {
    document.getElementById("teddiesName").innerHTML = teddy.name;
    document.getElementById("teddiesDescription").innerHTML = teddy.description;
    document.getElementById("teddiesPrice").innerHTML =
        teddy.price / 100 + ".00" + " " + "€";
    document.getElementById("teddiesImage").setAttribute("src", teddy.imageUrl);

    fillOption(teddy);
}

function fillOption(teddy) {
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

function setData() {
    let teddiesName = document.getElementById("teddiesName").textContent;
    let teddiesColor = document.getElementById("options").value;
    let teddiesQuant = document.getElementById("quantité").value;
    let teddiesPrice = document.getElementById("teddiesPrice").innerHTML;

    let data = [teddiesName, teddiesColor, teddiesQuant, teddiesPrice];
    localStorage.setItem("key", data);
}

//localStorage.setItem("quantité", teddiesQuant);
//localStorage.setItem("teddiesPrice", teddiesPrice);

/*const teddyName = () => {
    let nom = document.getElementById("teddiesName");
    let nameStorage = localStorage.getItem("nomTeddy");

    if (nameStorage == null) {
        console.log("alert");
    } else {
        nom.innerHTML = "${nameStorage}";
    }
};

const teddyColor = () => {
    let option = document.getElementById("options");
    let nameStorage = localStorage.getItem("colorTeddy");

    if (nameStorage == null) {
        console.log("alert");
    } else {
        option.innerHTML = "${nameStorage}";
    }
};

const teddyQuant = () => {
    let quant = document.getElementById("quantité");
    let nameStorage = localStorage.getItem("quantTeddy");

    if (nameStorage == null) {
        console.log("alert");
    } else {
        quant.innerHTML = "${nameStorage}";
    }
};*/

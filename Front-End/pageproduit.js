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

const btn = document.getElementById("validationPanier");

btn.addEventListener("click", () => {
    let data = {
        teddiesName: document.getElementById("teddiesName").textContent,
        teddiesColor: document.getElementById("options").value,
        teddiesQuant: document.getElementById("teddiesQuantité").value,
        teddiesPrice: document.getElementById("teddiesPrice").innerHTML,
    };

    let data_json = JSON.stringify(data);
    console.log(data);
    localStorage.setItem("objet", data_json);
});

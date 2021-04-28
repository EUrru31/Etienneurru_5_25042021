// information à récuperer pour page de confirmation: firstName / email

const naame = () => {
    let nom = document.getElementById("firstName");
    let nameStorage = localStorage.getItem("prenom");

    if (nameStorage == null) {
        console.log("alert");
    } else {
        nom.innerHTML = "${nameStorage}";
    }
};

function setData() {
    let firstName = document.getElementById("firstName").value;
    localStorage.setItem("prenom", firstName);
}

naame();

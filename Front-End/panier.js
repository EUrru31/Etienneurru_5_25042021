// information à récuperer pour page de confirmation: firstName / email

const name = () => {
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

name();

//Fenetre Modal pour la confirmation de la commande

let modal = null;

// Ouverture de la fenetre modal
const openModal = (e) => {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute("href"));
    target.style.display = null;
    target.setAttribute("aria-hidden", false);
    target.setAttribute("aria-modal", true);
    modal = target;
    modal.addEventListener("click", closeModal);
    modal
        .querySelector(".js-modal-close")
        .addEventListener("click", closeModal);
    modal
        .querySelector(".js-modal-stop")
        .addEventListener("click", stopPropagation);
};

// Fermeture de la fenetre modal
const closeModal = (e) => {
    if (modal === null) return;
    e.preventDefault();
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", true);
    modal.setAttribute("aria-modal", false);
    modal.removeEventListener("click", closeModal);
    modal
        .querySelector(".js-modal-close")
        .removeEventListener("click", closeModal);
    modal
        .querySelector(".js-modal-stop")
        .removeEventListener("click", stopPropagation);
    modal = null;
};

const stopPropagation = (e) => {
    e.stopPropagation();
};

document.querySelector(".btn").addEventListener("click", openModal);

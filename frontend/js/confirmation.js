//Import du compteur panier
import { countCartNumber } from "./helpers/cart.js";
countCartNumber();

// Récupération des données utilisateurs via l'url
const url = new URL(window.location.href);
const orderId = url.searchParams.get("orderId");
const name = url.searchParams.get("name");

document.getElementById("nom").textContent = " " + name;
document.getElementById("commandNumber").textContent = orderId;

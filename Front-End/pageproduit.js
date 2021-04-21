const url = window.location.href;
const teddyId = url.split("=")[1];
console.log(teddyID);

fetch("http://127.0.0.1:5500/pageproduit.html&id=" + teddy.id)
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then((teddy) => {
        console.log(teddy);
    });

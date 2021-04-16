const url = window.location.href;
const teddyId = url.split("=")[1];
console.log(teddyID);

fetch("http://localhost:3000/api/teddies/" + teddyId)
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then((teddy) => {
        console.log(teddy);
    });

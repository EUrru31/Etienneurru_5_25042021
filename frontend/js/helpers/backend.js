const backendUrl = "http://localhost:3000/api/teddies/";

//Récupération des données dans le back-end
export async function getAllTeddies() {
    try {
        const httpResponse = await fetch(backendUrl);
        const teddies = await httpResponse.json();

        return teddies;
    } catch (error) {
        console.error("Error while getting teddies :" + error);
    }
}

export async function getTeddyInformation(id) {
    try {
        const httpResponse = await fetch(backendUrl + id);
        const teddy = await httpResponse.json();

        return teddy;
    } catch (error) {
        console.error("Error while getting teddies information :" + error);
    }
}

//Envoi des données au back-end afin de récupérer le numéro de commande

export async function order(customerInformations, idsArray) {
    const httpResponse = await fetch(backendUrl + "order", {
        method: "post",
        headers: {
            Accept: "application/json",
            "content-type": "application/json",
        },
        body: JSON.stringify({
            contact: customerInformations,
            products: idsArray,
        }),
    });
    const response = await httpResponse.json();
    return response;
}

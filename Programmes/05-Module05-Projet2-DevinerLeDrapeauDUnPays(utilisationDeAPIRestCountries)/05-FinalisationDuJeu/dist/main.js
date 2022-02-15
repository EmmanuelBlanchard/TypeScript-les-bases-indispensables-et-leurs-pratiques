"use strict";
fetch("https://restcountries.com/v2/all").then(function (response) {
    var contentType = response.headers.get("content-type");
    if (contentType && contentType.indexOf("application/json") !== -1) {
        return response.json().then(function (datas) {
            startApplication(datas);
        });
    }
    else {
        document.querySelector("h1").textContent = "Les informations récupérées ne sont pas au format JSON";
    }
});
let listCountry = [];
let randomCountry;
function startApplication(datas) {
    for (let aCountry of datas) {
        const country = {
            name: aCountry.translations.fr,
            flag: aCountry.flag
        };
        listCountry.push(country);
    }
    startGame();
}
function startGame() {
    randomCountry = getRandomCountry(listCountry);
    document.querySelector("#flag").innerHTML = `<img src="${randomCountry.flag}" width="250px" class="border border-dark" alt="${randomCountry.name}"/>`;
    const goodResponse = randomCountry.name;
    const badResponse1 = getRandomCountry(listCountry).name;
    const badResponse2 = getRandomCountry(listCountry).name;
    const badResponse3 = getRandomCountry(listCountry).name;
    let theResponsesTable = [goodResponse, badResponse1, badResponse2, badResponse3];
    theResponsesTable = mixtureTable(theResponsesTable);
    document.querySelector("#buttons").innerHTML = generateResponseButtons(theResponsesTable);
}
// Shuffle an array using the Fisher-Yates shuffle algorithm
function mixtureTable(table) {
    let randomTable = table;
    for (var i = randomTable.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1)); //random index
        [randomTable[i], randomTable[j]] = [randomTable[j], randomTable[i]]; // swap
    }
    return randomTable;
}
function generateResponseButtons(table) {
    let buttonsHTML = "";
    for (let name of table) {
        buttonsHTML += `<button class="btn btn-primary me-3 mt-3" onClick="responseCheck('${name}')">${name}</button>`;
    }
    return buttonsHTML;
}
function responseCheck(nameSelectedResponse) {
    const divResult = document.querySelector("#result");
    if (nameSelectedResponse === randomCountry.name) {
        divResult.innerHTML = `<div class="alert alert-success">${nameSelectedResponse} est la bonne réponse</div>`;
    }
    else {
        divResult.innerHTML = `<div class="alert alert-danger">${nameSelectedResponse} est une mauvaise réponse</div>`;
    }
    divResult.innerHTML += `<button class="btn btn-outline-info me-3 mt-3" onClick="startGame()">Changer de pays</button>`;
}
function getRandomCountry(listCountry) {
    let random = Math.floor(Math.random() * listCountry.length);
    return listCountry[random];
}
//# sourceMappingURL=main.js.map
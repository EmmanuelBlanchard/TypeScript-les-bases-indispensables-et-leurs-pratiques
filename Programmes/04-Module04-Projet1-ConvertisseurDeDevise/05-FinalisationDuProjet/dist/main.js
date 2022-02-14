"use strict";
const dollar = {
    name: "Dollar",
    code: "USD",
    symbol: "$",
    rate: 1
};
const euro = {
    name: "Euro",
    code: "EUR",
    symbol: "€",
    rate: 1.1303
};
const pound = {
    name: "Pound",
    code: "GBP",
    symbol: "£",
    rate: 1.35341
};
const yen = {
    name: "Yen",
    code: "JPY",
    symbol: "¥",
    rate: 0.00865
};
const yuan = {
    name: "Yuan",
    code: "CNY",
    symbol: "元",
    rate: 0.15729
};
const bicoin = {
    name: "Bicoin",
    code: "BTC",
    symbol: "₿",
    rate: 42440.46495
};
const currencies = [dollar, euro, pound, yen, yuan, bicoin];
console.log(currencies);
const currencyInitialSelect = document.querySelector("#initialCurrency");
currencyInitialSelect.innerHTML = generateCurrencyOptionList(currencies);
// value recovery 
let currencyInitialValue = currencyInitialSelect.value;
currencyInitialSelect.addEventListener("change", () => {
    currencyInitialValue = currencyInitialSelect.value;
    console.log("Valeur devise initiale : " + currencyInitialValue);
});
const currencyFinaleSelect = document.querySelector("#finalCurrency");
currencyFinaleSelect.innerHTML = generateCurrencyOptionList(currencies);
// value recovery 
let currencyFinaleValue = currencyFinaleSelect.value;
currencyFinaleSelect.addEventListener("change", () => {
    currencyFinaleValue = currencyFinaleSelect.value;
    console.log("Valeur devise finale : " + currencyFinaleValue);
});
let amount = 0;
const amountInput = document.querySelector("#amount");
amountInput.addEventListener("keyup", () => {
    amount = +amountInput.value;
    // console.log("montant : " +amount);
    displayResult();
});
let divResult = document.querySelector("#result");
function displayResult() {
    divResult.innerHTML = "Résultat : " + calculationResult(amount, currencyInitialValue, currencyFinaleValue);
}
function calculationResult(in_amount, in_currencyInitialValue, in_currencyFinaleValue) {
    let currencyInitialObjet = getCurrency(in_currencyInitialValue, currencies);
    let currencyFinaleObjet = getCurrency(in_currencyFinaleValue, currencies);
    let currencyInitial;
    if (currencyInitialObjet)
        currencyInitial = currencyInitialObjet;
    else
        throw { message: "La devise initiale n'est pas correcte" };
    let currencyFinale;
    if (currencyFinaleObjet)
        currencyFinale = currencyFinaleObjet;
    else
        throw { message: "La devise finale n'est pas correcte" };
    return (in_amount * currencyInitial.rate) / currencyFinale.rate;
}
function getCurrency(codeCurrency, in_currencies) {
    for (let currency of in_currencies) {
        if (codeCurrency === currency.code) {
            return currency;
        }
    }
    return null;
}
function generateCurrencyOptionList(in_currencies) {
    let listCurrencyText = "";
    for (let currency of in_currencies) {
        listCurrencyText += `<option value="${currency.code}">${currency.name} - (${currency.symbol})</option>`;
    }
    return listCurrencyText;
}
//# sourceMappingURL=main.js.map
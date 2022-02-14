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
const currencyFinaleSelect = document.querySelector("#finalCurrency");
currencyFinaleSelect.innerHTML = generateCurrencyOptionList(currencies);
function generateCurrencyOptionList(in_currencies) {
    let listCurrencyText = "";
    for (let currency of in_currencies) {
        listCurrencyText += `<option value="${currency.code}">${currency.name} - (${currency.symbol})</option>`;
    }
    return listCurrencyText;
}
//# sourceMappingURL=main.js.map
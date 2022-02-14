type CurrencyType = {
    name:string;
    code:string;
    symbol:string;
    rate:number; // Conversion rate to the dollar
}

const dollar:CurrencyType = {
    name: "Dollar",
    code : "USD",
    symbol : "$",
    rate : 1
}

const euro:CurrencyType = {
    name: "Euro",
    code : "EUR",
    symbol : "€",
    rate : 1.1303
}

const pound:CurrencyType = {
    name: "Pound",
    code : "GBP",
    symbol : "£",
    rate : 1.35341
}

const yen:CurrencyType = {
    name: "Yen",
    code : "JPY",
    symbol : "¥",
    rate : 0.00865
}

const yuan:CurrencyType = {
    name: "Yuan",
    code : "CNY",
    symbol : "元",
    rate : 0.15729
}

const bicoin:CurrencyType = {
    name: "Bicoin",
    code : "BTC",
    symbol : "₿",
    rate : 42440.46495
}

const currencies:CurrencyType[] = [dollar,euro,pound,yen,yuan,bicoin];
console.log(currencies);

const currencyInitialSelect  = document.querySelector("#initialCurrency")! as HTMLSelectElement;
currencyInitialSelect.innerHTML = generateCurrencyOptionList(currencies);

const currencyFinaleSelect = document.querySelector("#finalCurrency")! as HTMLSelectElement;
currencyFinaleSelect.innerHTML = generateCurrencyOptionList(currencies);

function generateCurrencyOptionList(in_currencies:CurrencyType[]) : string {
    let listCurrencyText = "";
    for(let currency of in_currencies) {
        listCurrencyText += `<option value="${currency.code}">${currency.name} - (${currency.symbol})</option>`; 
    }
    return listCurrencyText;
}

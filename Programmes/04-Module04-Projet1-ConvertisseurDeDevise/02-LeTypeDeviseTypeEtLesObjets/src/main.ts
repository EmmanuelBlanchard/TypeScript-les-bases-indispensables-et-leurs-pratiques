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

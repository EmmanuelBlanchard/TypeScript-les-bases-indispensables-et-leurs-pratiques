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
// value recovery 
let currencyInitialValue = currencyInitialSelect.value;
currencyInitialSelect.addEventListener("change", () => {
    currencyInitialValue = currencyInitialSelect.value;
    console.log("Valeur devise initiale : " + currencyInitialValue);
})

const currencyFinaleSelect = document.querySelector("#finalCurrency")! as HTMLSelectElement;
currencyFinaleSelect.innerHTML = generateCurrencyOptionList(currencies);
// value recovery 
let currencyFinaleValue = currencyFinaleSelect.value;
currencyFinaleSelect.addEventListener("change" , () => {
    currencyFinaleValue = currencyFinaleSelect.value;
    console.log("Valeur devise finale : " + currencyFinaleValue);
})

let amount:number;
const amountInput = document.querySelector("#amount")! as HTMLInputElement;
amountInput.addEventListener("keyup", () => {
    amount = +amountInput.value;
    console.log("montant : " +amount);
});

function generateCurrencyOptionList(in_currencies:CurrencyType[]) : string {
    let listCurrencyText = "";
    for(let currency of in_currencies) {
        listCurrencyText += `<option value="${currency.code}">${currency.name} - (${currency.symbol})</option>`; 
    }
    return listCurrencyText;
}

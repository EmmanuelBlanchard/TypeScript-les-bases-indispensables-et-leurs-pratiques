fetch("https://restcountries.com/v2/all").then(function(response) {
  var contentType = response.headers.get("content-type");
  if(contentType && contentType.indexOf("application/json") !== -1) {
    return response.json().then(function(datas) {
      startApplication(datas);
    });
  } else {
    document.querySelector("h1")!.textContent = "Les informations récupérées ne sont pas au format JSON";
  }
});

type Country = {
  name : string;
  flag : string;
}
let listCountry:Country[] = [];
let randomCountry:Country;

type Datas = {
  translations: {
      fr : string;
      [props:string] : string;
  };
  flag:string;
  [props:string] : any;
}

function startApplication(datas:Datas[]) {
  for(let aCountry of datas) {
    const country:Country = {
      name : aCountry.translations.fr,
      flag : aCountry.flag
    }
    listCountry.push(country);
  }

  randomCountry = getRandomCountry(listCountry);
  document.querySelector("#flag")!.innerHTML = `<img src="${randomCountry.flag}" width="250px" class="border border-dark" alt="${randomCountry.name}"/>`;

  const goodResponse = randomCountry.name;
  const badResponse1 = getRandomCountry(listCountry).name;
  const badResponse2 = getRandomCountry(listCountry).name;
  const badResponse3 = getRandomCountry(listCountry).name;

  let theResponsesTable:string[] = [goodResponse,badResponse1,badResponse2,badResponse3];
  theResponsesTable = mixtureTable(theResponsesTable);

  document.querySelector("#buttons")!.innerHTML = generateResponseButtons(theResponsesTable);
}

// Shuffle an array using the Fisher-Yates shuffle algorithm
function mixtureTable(table : any[]) {
  let randomTable = table;
  for(var i = randomTable.length-1 ; i > 0 ; i--) {
      var j = Math.floor( Math.random() * (i + 1) ); //random index
      [randomTable[i],randomTable[j]]=[randomTable[j],randomTable[i]]; // swap
  }
  return randomTable;
}

function generateResponseButtons(table : string[]) : string {
  let buttonsHTML = "";
  for(let name of table) {
    buttonsHTML += `<button class="btn btn-primary me-3 mt-3" onClick="responseCheck('${name}')">${name}</button>`;
  }
  return buttonsHTML;
}

function responseCheck(nameSelectedResponse : string) : void {
  const divResult = document.querySelector("#result")! as HTMLDivElement;
  if(nameSelectedResponse === randomCountry.name) {
    divResult.innerHTML = `<div class="alert alert-success">${nameSelectedResponse} est la bonne réponse</div>`;
  } else {
    divResult.innerHTML = `<div class="alert alert-danger">${nameSelectedResponse} est une mauvaise réponse</div>`;
  }
}

function getRandomCountry(listCountry:Country[]) : Country {
  let random = Math.floor(Math.random() * listCountry.length);
  return listCountry[random];
}

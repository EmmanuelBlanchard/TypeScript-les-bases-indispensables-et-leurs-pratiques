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
  document.querySelector("#flag")!.innerHTML = `<img src="${randomCountry.flag}" width="250px" class="border border-dark m-3" alt="${randomCountry.name}"/>`;
}

function getRandomCountry(listCountry:Country[]) : Country {
  let random = Math.floor(Math.random() * listCountry.length);
  return listCountry[random];
}

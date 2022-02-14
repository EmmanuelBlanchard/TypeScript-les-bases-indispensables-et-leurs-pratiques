fetch("https://restcountries.com/v2/all").then(function(response) {
    var contentType = response.headers.get("content-type");
    if(contentType && contentType.indexOf("application/json") !== -1) {
      return response.json().then(function(json) {
        console.log(json);
      });
    } else {
      document.querySelector("h1")!.textContent = "Les informations récupérées ne sont pas au format JSON";
    }
  });

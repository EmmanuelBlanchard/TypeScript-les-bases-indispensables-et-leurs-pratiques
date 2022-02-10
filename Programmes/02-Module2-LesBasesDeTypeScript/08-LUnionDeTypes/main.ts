let firstName = "Matthieu";
let age = 32;
let sexe = true;
const sports = ["foot","rugby"];
const address = {
    line : "rue des fleurs",
    city : "Toulouse",
    zipCode : 31000
}

var information : string | number | boolean;
information = "Matthieu";
test(information);
information = 32;
test(information);
information = true;
test(information);

function test(in_input : string | number | boolean) {
    if(typeof(in_input) === "string") {
        console.log("Chaine de caractères");
    } else if (typeof(in_input) === "number") {
        console.log("Nombre");
    } else if (typeof(in_input) === "boolean") {
        console.log("Booléen");
    }
}

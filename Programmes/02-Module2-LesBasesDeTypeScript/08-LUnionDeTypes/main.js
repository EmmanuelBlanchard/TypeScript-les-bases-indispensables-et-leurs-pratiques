var firstName = "Matthieu";
var age = 32;
var sexe = true;
var sports = ["foot", "rugby"];
var address = {
    line: "rue des fleurs",
    city: "Toulouse",
    zipCode: 31000
};
var information;
information = "Matthieu";
test(information);
information = 32;
test(information);
information = true;
test(information);
function test(in_input) {
    if (typeof (in_input) === "string") {
        console.log("Chaine de caractères");
    }
    else if (typeof (in_input) === "number") {
        console.log("Nombre");
    }
    else if (typeof (in_input) === "boolean") {
        console.log("Booléen");
    }
}

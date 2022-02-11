var firstName = "Matthieu";
var age = 32;
var sexe = true;
var sports = ["foot", "rugby"];
var address = {
    line: "rue des fleurs",
    city: "Toulouse",
    zipCode: 31000
};
function showAddress(in_address) {
    console.log(in_address.line);
    console.log(in_address.zipCode + " " + in_address.city);
}
showAddress(address);
showAddress({ line: "rue des plantes", city: "Paris", zipCode: 75000 });
var table = [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 1, y: 3 }
];

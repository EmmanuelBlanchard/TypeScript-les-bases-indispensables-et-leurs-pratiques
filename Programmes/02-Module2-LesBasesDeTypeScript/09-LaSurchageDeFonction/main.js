var firstName = "Matthieu";
var age = 32;
var sexe = true;
var sports = ["foot", "rugby"];
var address = {
    line: "rue des fleurs",
    city: "Toulouse",
    zipCode: 31000
};
// The generic function
function add(e1, e2) {
    if (typeof e1 === "number" && typeof e2 === "number") {
        return e1 + e2;
    }
    return e1.toString() + " " + e2.toString();
}
var calculation = add(5, 15);
Math.floor(calculation);
var concat = add("Matthieu", "GASTON");
console.log(concat.toUpperCase());
var test = add(10, "Matthieu");
console.log(test);
var test2 = add("Matthieu", 10);
console.log(test2);

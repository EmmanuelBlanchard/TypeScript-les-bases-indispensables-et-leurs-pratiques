var firstName = "Matthieu";
var age = 32;
var sexe = true;
var sports = ["foot", "rugby"];
var address = {
    line: "rue des fleurs",
    city: "Toulouse",
    zipCode: 31000
};
var person = ["Matthieu", 31, true];
function showPerson(person) {
    for (var _i = 0, person_1 = person; _i < person_1.length; _i++) {
        var value = person_1[_i];
        console.log(value);
    }
}
showPerson(person);

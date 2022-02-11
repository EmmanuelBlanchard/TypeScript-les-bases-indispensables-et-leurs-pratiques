var firstName = "Matthieu";
var age = 32;
var sexe = true;
var sports = ["foot", "rugby"];
var address = {
    line: "rue des fleurs",
    city: "Toulouse",
    zipCode: 31000
};
// array of integers
var ratings = [10, 15, 20];
// array of strings 
var firstNames = ["Matthieu", "Milo", "Tya"];
// This array can only contain values of type << string >> or type << number >>.
var person = ["Matthieu", 31];
person[2] = "Test";
// This array can only contain two values, the first of type << string >>,
// the second of type << number >>.
var twoValuedPersonTable = ["Matthieu", 31];
// This array can only contain three values, the first of type << string >>,
// the second of type << number >>, the third of type << boolean >>.
var personTable = ["Matthieu", 31, true];
// Multidimensional array
var table = [
    [10, 12],
    [14, 16],
    [18, 20]
];
// Array of objects
var table2 = [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 1, y: 3 }
];
// This array that can contain all types of values
var table3 = ["matthieu", 32];
table3[0] = 32;
table3[1] = "matthieu";
table3[2] = false;
console.log("Prénom : " + table3[1]);
console.log("Age : " + table3[0]);

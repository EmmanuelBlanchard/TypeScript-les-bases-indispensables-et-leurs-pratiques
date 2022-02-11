let firstName = "Matthieu";
let age = 32;
let sexe = true;
const sports = ["foot","rugby"];
const address = {
    line : "rue des fleurs",
    city : "Toulouse",
    zipCode : 31000
}

// array of integers
const ratings = [10,15,20];
// array of strings 
const firstNames = ["Matthieu", "Milo", "Tya"];

// This array can only contain values of type << string >> or type << number >>.
const person:(string|number)[] = ["Matthieu",31];
person[2] = "Test";

// This array can only contain two values, the first of type << string >>,
// the second of type << number >>.
const twoValuedPersonTable:[string,number] = ["Matthieu",31];

// This array can only contain three values, the first of type << string >>,
// the second of type << number >>, the third of type << boolean >>.
const personTable:[string,number,boolean] = ["Matthieu",31,true];

// Multidimensional array
const table = [
    [10,12],
    [14,16],
    [18,20]
]

// Array of objects
const table2: {
    x:number,
    y:number
}[] = [
    {x:1,y:2},
    {x:2,y:3},
    {x:1,y:3}
]

// This array that can contain all types of values
let table3:any[] = ["matthieu",32];
table3[0] = 32;
table3[1] = "matthieu";
table3[2] = false; 
console.log("Prénom : " + table3[1]);
console.log("Age : " + table3[0]);

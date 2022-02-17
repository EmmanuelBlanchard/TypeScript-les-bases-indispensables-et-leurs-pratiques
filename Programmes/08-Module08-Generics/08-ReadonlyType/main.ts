// The values in the table can be modified and it is possible to add or decrease the number of cells
const names0 : string[] = ["tya" , "Toto"];
names0[0] = "toto";
names0.push("Bernard");

// Creation of array constant
// The table cannot be modified
const names1 : Readonly<string[]> = ["tya" , "Toto"];
// Errors
// names1[0] = "toto";
// names1.push("Bernard");

type Character = {
    name : string;
    age : number;
}

// The objet can be modified
const character0:Character = {
    name :"Tya",
    age : 15
}
character0.name = "Toto";
character0.age = 18

// Creation of object constant
// The different properties of the Character object cannot be modified
const character1:Readonly<Character> = {
    name :"Tya",
    age : 15
}
// Errors
// character1.name = "Toto";
// character1.age = 18

console.log(names0);

console.log(names1);

console.log(character0);

console.log(character1);


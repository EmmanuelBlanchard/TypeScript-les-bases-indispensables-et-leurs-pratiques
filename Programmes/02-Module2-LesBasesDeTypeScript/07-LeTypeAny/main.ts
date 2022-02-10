let firstName = "Matthieu";
let age = 32;
let sexe = true;
const sports = ["foot","rugby"];
const address = {
    line : "rue des fleurs",
    city : "Toulouse",
    zipCode : 31000
}

const person:any[] = ["Matthieu",31,true];

function showPerson(person:any[]) {
    for(let value of person) {
        console.log(value);
    }
}

showPerson(person);

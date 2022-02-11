// definition of a type, first letter of the type in capital letter 
type Address = {
    line : string;
    city : string;
    zipCode : number;
}

let firstName = "Matthieu";
let age = 32;
let sexe = true;
const sports = ["foot","rugby"];
const address:Address = {
    line : "rue des fleurs",
    city : "Toulouse",
    zipCode : 31000
}

function showAddress(in_address:Address): void {
    console.log(in_address.line);
    console.log(in_address.zipCode + " " + in_address.city);
}

showAddress(address);
showAddress({line:"rue des plantes",city:"Paris",zipCode:75000});

type Dot = {
    x:number;
    y:number;
}

const table: Dot[] = [
    {x:1,y:2},
    {x:2,y:3},
    {x:1,y:3}
]

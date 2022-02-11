let firstName = "Matthieu";
let age = 32;
let sexe = true;
const sports = ["foot","rugby"];
const address = {
    line : "rue des fleurs",
    city : "Toulouse",
    zipCode : 31000
}

// Function overload in order to use the generic function
function add(e1:string,e2:number) : string;
function add(e1:number,e2:string) : string;
function add(e1:string, e2:string) : string;
function add(e1:number, e2:number) : number;
// The generic function
function add(e1 : number | string, e2: number | string) : number | string {
    if(typeof e1 === "number" && typeof e2 === "number") {
        return e1 + e2;
    }
    return e1.toString() + " " + e2.toString();
}

let calculation = add(5,15);
Math.floor(calculation);

let concat = add("Matthieu", "GASTON");
console.log(concat.toUpperCase());

let test = add(10,"Matthieu");
console.log(test);

let test2 = add("Matthieu",10);
console.log(test2);

let firstName = "Matthieu";
let age = 32;
let sexe = true;
const sports = ["foot","rugby"];
const address = {
    line : "rue des fleurs",
    city : "Toulouse",
    zipCode : 31000
}

let afficherPersonne = (
    in_first_name:string, 
    in_age:number, 
    in_sexe:boolean, 
    in_sports:string[], 
    in_address:{
        line : string;
        city : string;
        zipCode : number;
    }
    ) : void => {
    console.log(`Prenom : ${in_first_name}`);
    console.log("Age : " + in_age);
    console.log("Sexe : " + (in_sexe ? "Homme" : "Femme"));
    for(let sport of in_sports) {
        console.log(sport)
    }
    console.log("Adresse : ");
    console.log(in_address.line)
    console.log(in_address.zipCode + " " + in_address.city);
}

afficherPersonne(firstName,age,sexe,sports,address);


let birthday = (in_age:number=17) : number => {
    return in_age + 1;
}

let newAge:number;
newAge=birthday(age);
console.log("L'age est de " + newAge);

let firstName = "Matthieu";
let age = 32;
let sexe = true;
const sports = ["foot","rugby"];
const address = {
    line : "rue des fleurs",
    city : "Toulouse",
    zipCode : 31000
}

let afficherPersonne = (in_first_name, in_age, in_sexe, in_sports, in_address) => {
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

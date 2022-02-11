var person1 = ["Matthieu", 31, true];
var person2 = ["Tya", 18, false];
var firstName = "Matthieu";
var age = 32;
var sexe = true;
var sports = ["foot", "rugby"];
var address = {
    line: "rue des fleurs",
    city: "Toulouse",
    zipCode: 31000
};
function showAddress(in_address) {
    console.log(in_address.line);
    console.log(in_address.zipCode + " " + in_address.city);
}
showAddress(address);
showAddress({ line: "rue des plantes", city: "Paris", zipCode: 75000 });
var table = [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 1, y: 3 }
];
/*
    * Le mot clef << object >> n'est pas utilisé pour définir un type << objet >>.

    * Il faut utiliser les accolades << {} >>.

    * Exemple de type objet :
    
    type Personne = {
        nom : string;
        age : number;
        sexe : boolean;
        sports : string[];
    }

    const p1:Personne = {
        nom : "Matthieu",
        age : 32,
        sexe : true,
        sports : ["Foot","rugby"]
    }

    console.log(p1);

    * Les interfaces permettent d'effectuer le même travail !

    * Exemple d'interface :

    interface Personne {
        nom : string;
        age : number;
        sexe : boolean;
        sports : string[];
    }

    const p1:Personne = {
        nom : "Matthieu",
        age : 32,
        sexe : true,
        sports : ["Foot","rugby"]
    }

    * Le mot clef << type >> est plus flexible (permet d'effectuer des Unions, des intersections, etc..)

    * Le mot clef << interface >> permet de préciser de manière plus précise que l'on travaille avec des objets et des classes.

    * On choisira en règle général de créer des interfaces pour etre utilisées avec des classes et des objets

    * La création de types sera utilisée avec des types << simples >> .

*/ 

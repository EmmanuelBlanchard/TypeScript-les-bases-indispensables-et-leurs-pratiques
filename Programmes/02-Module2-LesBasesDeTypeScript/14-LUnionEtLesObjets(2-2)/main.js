var character1 = {
    name: "Tya",
    breed: "Humain",
    age: 31
};
var character2 = {
    name: "Gael",
    breed: "Monstre",
    tribe: "Orc vert"
};
function showPerson(person) {
    console.log("Nom : " + person.name);
    if (person.breed === "Humain") {
        console.log("Age : " + person.age);
    }
    if (person.breed === "Monstre") {
        console.log("Tribu : " + person.tribe);
    }
}
showPerson(character1);
showPerson(character2);
/*
    * L'union peut également s'utiliser sur les objets

    * Lorsque l'on réalise une fonction pour afficher un objet d'un type ayant utilisé une union, il est nécessaire de faire des vérifications sur les propriétés

    * Le mot clef << in >> permet de le faire :

    function afficherPersonnage(perso : Perso) {
        console.log("Nom : " + perso.nom);
        if("age" in perso) {
            console.log("Age : " + perso.age);
        }
        if("tribu" in perso) {
            console.log("Tribu : " + perso.tribu);
        }
    }

    * En POO et avec des classes, on pourra utiliser le mot clef << instanceof >>

*/
/*
    * Pour faciliter l'utilisation du type union sur des objets, on pourra rajouter une propriete permettant de faire la distinction de type

    * Exemple  (ajout de type litteral):

    interface Person {
        type: "person";
        name : string;
        age : number;
        sexe : boolean;
        sports : string[];
    }

    interface Monster {
        type : "monster";
        name : string;
        tribe : string;
    }

    type Character = Monster | Person;
    
    const person1:Person = {
        type: "person",
        name : "Matthieu",
        age : 32,
        sexe : true,
        sports : string["foot,"rugby"],
    };

    const monster1:Monster = {
        type : "monster",
        name  : "Gael",
        tribe : "Orc vert"
    }

    function showPerson(person : Person)  {
        console.log("Name : " + person.nom);
        if(person.type==="person") {
            console.log("Age : " + person.age);
            console.log("Sexe : " + (person.sexe ? "Man" : "Woman"));
        }
        if(person.type==="monster") {
            console.log("Tribu du monstre : " + person.tribe);
        }
    }

    showPerson(person1);
    showPerson(monster1);
*/

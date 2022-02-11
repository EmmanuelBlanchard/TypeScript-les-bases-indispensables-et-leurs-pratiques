var character1 = {
    name: "Tya",
    age: 31
};
var character2 = {
    name: "Gael",
    tribe: "Orc vert"
};
function showPerson(person) {
    console.log("Nom : " + person.name);
    if ("age" in person) {
        console.log("Age : " + person.age);
    }
    if ("tribe" in person) {
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

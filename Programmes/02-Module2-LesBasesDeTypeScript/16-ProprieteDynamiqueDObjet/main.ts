type Character = {
    name : string;
    weight : number,
    [props:string] : any;
}

const p1:Character = {
    name : "Matthieu",
    age : 31,
    weight : 60,
}

p1.size = 180;

/*
    Typage de propriétés

    => Lorsque l'on définit un objet par l'intermédiaire du mot clé << type >>
    ou via une interface, il est possible de définir le type de propriété que pourra 
    contenir l'objet.

    => Exemple :

    type erreur = {
	    [props:string] : string;  // Les objets de type << erreur >> pourront avoir autant de propriétés que nécessaires mais toutes du type << string >>.
	    code : string;
    }

    => Exemple d'utilisation : 

    const page404:erreur = {
	    code: "404",
	    message : "La page n'existe pas",
	    image : "page404.jpg",
    }

    const page500:erreur = {
	    code: "500",
	    message : "Erreur serveur"
    }

*/
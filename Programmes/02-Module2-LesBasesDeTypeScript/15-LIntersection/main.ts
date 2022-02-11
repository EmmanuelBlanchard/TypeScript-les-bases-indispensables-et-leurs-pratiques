interface Character {
    name : string;
    age : number;
}

interface Human {
    class : string;
}

interface Man extends Character, Human {
    sports : string[],
};

// type Man = Character & Human;

const test : Human = {
    class : "voleur"
}

const matthieu:Man = {
    name : "Matthieu",
    age : 31,
    class : "Guerrier",
    sports : ["foot","rugby"]
}

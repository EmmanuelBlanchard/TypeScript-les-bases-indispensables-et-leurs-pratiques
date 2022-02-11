enum CLASS {WARRIOR = "Warrior",THIEF = "Thief", ARCHER = "Archer"}; 

interface Character {
    name : string;
}

interface Warrior extends Character {
    class : CLASS.WARRIOR;
}
interface Thief extends Character {
    class : CLASS.THIEF;
}

const person1:Character & Warrior = {
    name : "Matthieu",
    class : CLASS.WARRIOR
}

console.log(CLASS.WARRIOR);
console.log(person1);

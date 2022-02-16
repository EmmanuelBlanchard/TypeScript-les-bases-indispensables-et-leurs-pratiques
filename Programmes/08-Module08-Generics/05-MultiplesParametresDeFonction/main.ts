function createCharacter<T extends Character,U extends {class:string}>(obj1:T,obj2:U) {
    return Object.assign(obj1,obj2);
}

interface Character {
    name : string;
    age : number;
}
interface Warrior {
    class : "guerrier";
    tribe : string;
}
interface Archer {
    class : "archer";
    numberOfArrows : number;
}

const character:Character = {name : "matthieu",age : 31}
const warrior:Warrior = {class : "guerrier",tribe : "Orc vert"}

const character2:Character = {name : "Tya",age : 18};
const archer:Archer = {class : "archer",numberOfArrows : 50}

const warrior1 = createCharacter(character,warrior);
const warrior2 = createCharacter(character2,archer);

const a = createCharacter({name:"Tya",age:31},{class:"fgdsgf"});
console.log(a);

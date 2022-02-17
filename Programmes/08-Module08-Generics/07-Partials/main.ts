interface Character {name : string;age : number;}
interface Warrior extends Character {class : "guerrier";tribe : string;}
interface Archer extends Character {class : "archer";numberOfArrows : number;}

const warrior1:Warrior = {name : "Milo",age : 18,class : "guerrier",tribe : "Orc vert"};
const archer1:Archer = {name : "Tya",age : 18,class : "archer",numberOfArrows : 50};

class Characters<T extends Character> {
    private list:Array<T> = [];

    public addCharacter(perso:T) {
        this.list.push(perso);
    }

    public showCharacters() {
        for(let element of this.list) {
            console.log(element);
        }
    }
}

const listWarrior = new Characters<Warrior>();
listWarrior.addCharacter(warrior1);
console.log("Liste de guerriers :");
listWarrior.showCharacters();

const listArcher = new Characters<Archer>();
listArcher.addCharacter(archer1);
console.log("Liste d'archers :");
listArcher.showCharacters();


function createCharacter() : Character {
    let character:Partial<Character> = {
        name : "Milo",
    }
    character.age = 15;
    return character as Character;
}

let character1 = createCharacter();

console.log(character1);


const warrior1 = { name: "Milo", age: 18, class: "guerrier", tribe: "Orc vert" };
const archer1 = { name: "Tya", age: 18, class: "archer", numberOfArrows: 50 };
class Characters {
    constructor() {
        this.list = [];
    }
    addCharacter(perso) {
        this.list.push(perso);
    }
    showCharacters() {
        for (let element of this.list) {
            console.log(element);
        }
    }
}
const listWarrior = new Characters();
listWarrior.addCharacter(warrior1);
console.log("Liste de guerriers :");
listWarrior.showCharacters();
const listArcher = new Characters();
listArcher.addCharacter(archer1);
console.log("Liste d'archers :");
listArcher.showCharacters();
function createCharacter() {
    let character = {
        name: "Milo",
    };
    character.age = 15;
    return character;
}
let character1 = createCharacter();
console.log(character1);

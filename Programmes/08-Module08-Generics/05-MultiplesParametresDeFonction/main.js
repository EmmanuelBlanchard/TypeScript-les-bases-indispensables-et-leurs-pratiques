function createCharacter(obj1, obj2) {
    return Object.assign(obj1, obj2);
}
const character = { name: "matthieu", age: 31 };
const warrior = { class: "guerrier", tribe: "Orc vert" };
const character2 = { name: "Tya", age: 18 };
const archer = { class: "archer", numberOfArrows: 50 };
const warrior1 = createCharacter(character, warrior);
const warrior2 = createCharacter(character2, archer);
const a = createCharacter({ name: "Tya", age: 31 }, { class: "fgdsgf" });
console.log(a);

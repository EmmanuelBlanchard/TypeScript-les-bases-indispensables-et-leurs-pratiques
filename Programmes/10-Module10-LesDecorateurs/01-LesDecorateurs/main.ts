// The decorator is executed only once when the class is integrated in the program
function decoratorClass(constructor:Function) {
    console.log("Décorateur de la classe")
}

@decoratorClass
class Person {
    private _name : string;
    private _age : number;

    constructor(name:string,age:number) {
        console.log("Construteur de la classe Person");
        this._name = name;
        this._age = age;
    }
}

const person1 = new Person("Matthieu",31);
const person2 = new Person("Tya",18);


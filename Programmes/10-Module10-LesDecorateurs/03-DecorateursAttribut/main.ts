// https://www.typescriptlang.org/docs/handbook/decorators.html
/*

Decorator Factories

If we want to customize how a decorator is applied to a declaration, we can write a decorator factory. A Decorator Factory is simply a function that returns the expression that will be called by the decorator at runtime.

We can write a decorator factory in the following fashion:
*/
function decoratorClass(nameClass: string) {
    // this is the decorator factory, it sets up
    // the returned decorator function
    return (constructor: Function) => {
        console.log("Décorateur de la classe : " + nameClass);
        // this is the decorator
        // do something with 'target' and 'value'...
    }
}

// https://www.typescriptlang.org/docs/handbook/decorators.html#property-decorators
function decoratorAttribute(typeAttribut : string) {
    return (target: any, propertyKey: string) => {
        console.log("PropertyKey : " + propertyKey + " : " + typeAttribut);
    }
}

function decoratorAttribute2(target: any, propertyKey: string) {
    console.log("Décorateur Attribut");
}

@decoratorClass("Person")
class Person {
    @decoratorAttribute("string")
    @decoratorAttribute2
    private _name : string;
    @decoratorAttribute("number")
    private _age : number;

    constructor(name:string,age:number) {
        console.log("Construteur de la classe Person");
        this._name = name;
        this._age = age;
    }
}

@decoratorClass("Human")
class Human extends Person {
    @decoratorAttribute("string")
    private _race = "Human";
}

const person1 = new Person("Matthieu",31);
const person2 = new Person("Tya",18);
const person3 = new Human("Milo",31);

// Display console.log =>
/*
Décorateur Attribut
PropertyKey : _name : 
PropertyKey : _age : number 
Décorateur de la classe : Person 
PropertyKey : _race : string 
Décorateur de la classe : Human 
Construteur de la classe Person
*/
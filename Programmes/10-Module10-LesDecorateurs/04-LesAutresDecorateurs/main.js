"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// https://www.typescriptlang.org/docs/handbook/decorators.html
/*

Decorator Factories

If we want to customize how a decorator is applied to a declaration, we can write a decorator factory. A Decorator Factory is simply a function that returns the expression that will be called by the decorator at runtime.

We can write a decorator factory in the following fashion:
*/
function decoratorClass(nameClass) {
    // this is the decorator factory, it sets up
    // the returned decorator function
    return (constructor) => {
        console.log("Décorateur de la classe : " + nameClass);
        // this is the decorator
        // do something with 'target' and 'value'...
    };
}
// https://www.typescriptlang.org/docs/handbook/decorators.html#property-decorators
function decoratorAttribute(typeAttribut) {
    return (target, propertyKey) => {
        console.log("Décorateur Attribut");
        console.log("PropertyKey : " + propertyKey + " : " + typeAttribut);
        console.log("-------------");
    };
}
function decoratorAttribute2(target, propertyKey) {
    console.log("Décorateur Attribut2");
    console.log("PropertyKey : " + propertyKey);
    console.log("-------------");
}
// https://www.typescriptlang.org/docs/handbook/decorators.html#accessor-decorators
function decoratorAccessor(target, propertyKey, descriptor) {
    console.log("Décorateur d'accesseur");
    console.log("PropertyKey : " + propertyKey);
    console.log("Descriptor : ");
    console.log(descriptor);
    console.log("-------------");
}
// https://www.typescriptlang.org/docs/handbook/decorators.html#method-decorators
function decoratorMethod(target, propertyKey, descriptor) {
    console.log("Décorateur de méthode");
    console.log("Décorateur de la fonction " + propertyKey);
    console.log("Descriptor : ");
    console.log(descriptor);
    console.log("-------------");
}
// https://www.typescriptlang.org/docs/handbook/decorators.html#parameter-decorators
function decoratorParameter(target, propertyKey, parameterIndex) {
    console.log("Décorateur de paramètre");
}
let Person = class Person {
    constructor(name, age) {
        console.log("Construteur de la classe Person");
        this._name = name;
        this._age = age;
    }
    get nom() { return this._name; }
    ;
    set nom(newName) { this._name = newName; }
    ;
    get age() { return this._age; }
    ;
    set age(newAge) { this._age = newAge; }
    ;
    showPerson() {
        console.log("Nom : " + this._name);
        console.log("Age : " + this._age);
    }
    changeAge(number) {
        this._age = number;
    }
};
__decorate([
    decoratorAttribute("string"),
    decoratorAttribute2
], Person.prototype, "_name", void 0);
__decorate([
    decoratorAttribute("number")
], Person.prototype, "_age", void 0);
__decorate([
    decoratorAccessor
], Person.prototype, "nom", null);
__decorate([
    decoratorAccessor
], Person.prototype, "age", null);
__decorate([
    decoratorMethod
], Person.prototype, "showPerson", null);
__decorate([
    __param(0, decoratorParameter)
], Person.prototype, "changeAge", null);
Person = __decorate([
    decoratorClass("Person")
], Person);
let Human = class Human extends Person {
    constructor() {
        super(...arguments);
        this._race = "Human";
    }
};
__decorate([
    decoratorAttribute("string")
], Human.prototype, "_race", void 0);
Human = __decorate([
    decoratorClass("Human")
], Human);
const person1 = new Person("Matthieu", 31);
const person2 = new Person("Tya", 18);
const person3 = new Human("Milo", 31);
// Display console.log =>
/*

Décorateur Attribut2
PropertyKey : _name
-------------
Décorateur Attribut
PropertyKey : _name : string
-------------
Décorateur Attribut
PropertyKey : _age : number
-------------
Décorateur d'accesseur
PropertyKey : nom
Descriptor :
Object { get: nom(), set: nom(newName)
, enumerable: false, configurable: true }
-------------
Décorateur d'accesseur
PropertyKey : age
Descriptor :
Object { get: age(), set: age(newAge)
, enumerable: false, configurable: true }
-------------
Décorateur de méthode
Décorateur de la fonction showPerson
Descriptor :
Object { value: showPerson()
, writable: true, enumerable: false, configurable: true }
-------------
Décorateur de paramètre
Décorateur de la classe : Person
Décorateur Attribut
PropertyKey : _race : string
-------------
Décorateur de la classe : Human
Construteur de la classe Person

*/

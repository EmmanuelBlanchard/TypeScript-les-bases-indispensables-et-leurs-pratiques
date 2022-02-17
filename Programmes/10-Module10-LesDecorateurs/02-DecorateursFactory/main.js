"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
let Person = class Person {
    constructor(name, age) {
        console.log("Construteur de la classe Person");
        this._name = name;
        this._age = age;
    }
};
Person = __decorate([
    decoratorClass("Person")
], Person);
let Human = class Human extends Person {
};
Human = __decorate([
    decoratorClass("Human")
], Human);
const person1 = new Person("Matthieu", 31);
const person2 = new Person("Tya", 18);
const person3 = new Human("Milo", 31);

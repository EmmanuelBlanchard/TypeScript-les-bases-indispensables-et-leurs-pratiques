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
        console.log("Décorateur Attribut");
        console.log("PropertyKey : " + propertyKey + " : " + typeAttribut);
        console.log("-------------");
    }
}

function decoratorAttribute2(target: any, propertyKey: string) {
    console.log("Décorateur Attribut2");
    console.log("PropertyKey : " + propertyKey);
    console.log("-------------");
}

// https://www.typescriptlang.org/docs/handbook/decorators.html#accessor-decorators
function decoratorAccessor(target: any, propertyKey: string, descriptor: PropertyDescriptor){
    console.log("Décorateur d'accesseur");
    console.log("PropertyKey : " + propertyKey);
    console.log("Descriptor : ");
    console.log(descriptor);
    console.log("-------------");
}

// https://www.typescriptlang.org/docs/handbook/decorators.html#method-decorators
function decoratorMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("Décorateur de méthode");
    console.log("Décorateur de la fonction " + propertyKey);
    console.log("Descriptor : ");
    console.log(descriptor);
    console.log("-------------");
}

// https://www.typescriptlang.org/docs/handbook/decorators.html#parameter-decorators
function decoratorParameter(target: Object, propertyKey: string | symbol, parameterIndex: number) {
    console.log("Décorateur de paramètre");
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

    @decoratorAccessor 
    get nom() {return this._name};
    set nom(newName : string) {this._name = newName};
    
    @decoratorAccessor
    get age() {return this._age};
    set age(newAge : number) {this._age = newAge};

    @decoratorMethod
    showPerson() {
        console.log("Nom : " + this._name);
        console.log("Age : " + this._age);
    }

    changeAge(@decoratorParameter number : number) {
        this._age = number;
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


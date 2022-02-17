"use strict";
var TypeVehicle;
(function (TypeVehicle) {
    TypeVehicle["BUS"] = "Bus";
    TypeVehicle["CAR"] = "Voiture";
})(TypeVehicle || (TypeVehicle = {}));
;
class Vehicle {
    constructor(_matriculation, _type) {
        this._matriculation = _matriculation;
        this._type = _type;
    }
    ;
    get matriculation() { return this._matriculation; }
    get type() { return this._type; }
}
class Car extends Vehicle {
    constructor(matriculation) {
        super(matriculation, TypeVehicle.CAR);
    }
}
class Bus extends Vehicle {
    constructor(matriculation) {
        super(matriculation, TypeVehicle.BUS);
    }
}
let bus1 = new Bus("XX1111XX");
let bus2 = new Bus("YY2222YY");
let car1 = new Car("AB1111CD");
let car2 = new Car("EF2222GH");
console.log(bus1);
console.log(bus2);
console.log(car1);
console.log(car2);

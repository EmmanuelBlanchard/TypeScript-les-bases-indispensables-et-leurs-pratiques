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
class ListOfVehicles {
    constructor() {
        this._list = [];
    }
    get list() { return this._list; }
    ;
    addVehicle(vehicule) {
        this._list.push(vehicule);
    }
    removeVehicle() {
        if (this._list.length > 0) {
            this._list.pop();
        }
    }
}
class CarFleet {
    constructor() {
        this._cars = new ListOfVehicles();
        this._bus = new ListOfVehicles();
    }
    get cars() { return this._cars; }
    ;
    get bus() { return this._bus; }
    ;
    addVehicle(vehicle) {
        if (vehicle.type === TypeVehicle.CAR) {
            this._cars.addVehicle(vehicle);
        }
        else if (vehicle.type === TypeVehicle.BUS) {
            this._bus.addVehicle(vehicle);
        }
    }
    rentCar(type) {
        if (type === TypeVehicle.BUS) {
            this._bus.removeVehicle();
        }
        else if (type === TypeVehicle.CAR) {
            this._cars.removeVehicle();
        }
    }
    showFleet() {
        console.log("Liste des voitures :");
        for (let car of this._cars.list) {
            console.log("Immatriculation : " + car.matriculation);
        }
        console.log("Liste des Bus :");
        for (let oneBus of this._bus.list) {
            console.log("Immatriculation : " + oneBus.matriculation);
        }
    }
}
let bus1 = new Bus("XX1111XX");
let bus2 = new Bus("YY2222YY");
let car1 = new Car("AB1111CD");
let car2 = new Car("EF2222GH");
let mgaFleet = new CarFleet();
mgaFleet.showFleet();
console.log("--------------------");
mgaFleet.addVehicle(bus1);
mgaFleet.addVehicle(bus2);
mgaFleet.addVehicle(car1);
mgaFleet.addVehicle(car2);
mgaFleet.showFleet();
console.log("--------------------");
mgaFleet.rentCar(TypeVehicle.CAR);
mgaFleet.showFleet();

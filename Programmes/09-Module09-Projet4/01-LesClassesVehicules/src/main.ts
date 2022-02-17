enum TypeVehicle {BUS="Bus",CAR="Voiture"};

abstract class Vehicle {
    constructor(private _matriculation:string, private _type:string){};
    get matriculation() {return this._matriculation;}
    get type() {return this._type;}
}

class Car extends Vehicle {
    constructor(matriculation:string) {
        super(matriculation,TypeVehicle.CAR);
    }
}

class Bus extends Vehicle {
    constructor(matriculation:string) {
        super(matriculation,TypeVehicle.BUS);
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


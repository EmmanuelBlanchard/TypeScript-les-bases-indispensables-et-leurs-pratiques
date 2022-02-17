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

class ListOfVehicles<T> {
    private _list:Array<T> = [];

    get list() {return this._list};
    
    addVehicle(vehicule:T) {
        this._list.push(vehicule);
    }

    removeVehicle() {
        if(this._list.length > 0) {
            this._list.pop();
        }
    }
}

let bus1 = new Bus("XX1111XX");
let bus2 = new Bus("YY2222YY");
let car1 = new Car("AB1111CD");
let car2 = new Car("EF2222GH");

let listOfCars = new ListOfVehicles<Car>();
listOfCars.addVehicle(car1);
listOfCars.addVehicle(car2);
listOfCars.removeVehicle();

let listOfBus = new ListOfVehicles<Bus>();
listOfBus.addVehicle(bus1);
listOfBus.addVehicle(bus2);

console.log(listOfCars.list);
console.log(listOfBus.list);


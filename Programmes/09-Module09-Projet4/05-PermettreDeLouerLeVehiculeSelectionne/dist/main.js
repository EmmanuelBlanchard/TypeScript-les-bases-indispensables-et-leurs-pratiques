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
    rentVehicle(vehicle) {
        this._list.splice(this._list.indexOf(vehicle), 1);
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
    getVehicles() {
        let tableVehicles = [];
        tableVehicles.push(...this._bus.list, ...this._cars.list);
        return tableVehicles;
    }
    rentVehicleMatriculation(matriculation) {
        let vehicle = this.getVehicleMatriculation(matriculation); //vehicle or null
        if (vehicle) {
            if (vehicle.type === TypeVehicle.BUS) {
                this._bus.rentVehicle(vehicle);
            }
            else if (vehicle.type === TypeVehicle.CAR) {
                this._cars.rentVehicle(vehicle);
            }
        }
        else {
            throw { message: "Erreur d'immatriculation" };
        }
    }
    getVehicleMatriculation(matriculation) {
        let vehicles = this.getVehicles(); //table of all vehicles in the fleet
        for (let vehicle of vehicles) {
            if (vehicle.matriculation === matriculation) {
                return vehicle;
            }
        }
        return null;
    }
}
let mgaFleet = new CarFleet();
mgaFleet.addVehicle(new Bus("XX1111XX"));
mgaFleet.addVehicle(new Bus("YY2222YY"));
mgaFleet.addVehicle(new Bus("ZZ3333ZZ"));
mgaFleet.addVehicle(new Car("AB1111CD"));
mgaFleet.addVehicle(new Car("EF2222GH"));
mgaFleet.addVehicle(new Car("IJ3333KL"));
// console.log(mgaFleet.getVehicles());
const selectList = document.querySelector("#ListOfVehicles");
selectList.innerHTML = createSelectedVehicleList();
const rentButton = document.querySelector("#Rent");
rentButton.addEventListener("click", () => {
    const matriculation = selectList.value;
    mgaFleet.rentVehicleMatriculation(matriculation);
    // Update of the selected list of matriculation
    selectList.innerHTML = createSelectedVehicleList();
});
function createSelectedVehicleList() {
    let txt = "";
    for (let vehicle of mgaFleet.getVehicles()) {
        txt += `<option value="${vehicle.matriculation}">${vehicle.type} : ${vehicle.matriculation}</option>`;
    }
    return txt;
}

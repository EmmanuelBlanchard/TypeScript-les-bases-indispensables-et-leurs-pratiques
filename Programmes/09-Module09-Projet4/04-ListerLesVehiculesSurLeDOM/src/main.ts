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

class CarFleet {
    private _cars:ListOfVehicles<Car> = new ListOfVehicles<Car>();
    private _bus:ListOfVehicles<Bus> = new ListOfVehicles<Bus>();

    get cars() {return this._cars};
    get bus() {return this._bus};

    addVehicle<T extends Vehicle>(vehicle:T) {
        if(vehicle.type === TypeVehicle.CAR) {
            this._cars.addVehicle(vehicle);
        } else if(vehicle.type === TypeVehicle.BUS) {
            this._bus.addVehicle(vehicle);
        }
    }
    
    rentCar(type:TypeVehicle) {
        if(type === TypeVehicle.BUS) {
            this._bus.removeVehicle();
        } else if(type === TypeVehicle.CAR) {
            this._cars.removeVehicle();
        }
    }

    showFleet() {
        console.log("Liste des voitures :");
        for(let car of this._cars.list) {
            console.log("Immatriculation : " + car.matriculation);
        }
        console.log("Liste des Bus :");
        for(let oneBus of this._bus.list) {
            console.log("Immatriculation : " + oneBus.matriculation);
        }
    }

    getVehicles() : Vehicle[] {
        let tableVehicles:Vehicle[] = [];
        tableVehicles.push(...this._bus.list,...this._cars.list);
        return tableVehicles;
    }
}

let mgaFleet = new CarFleet();
mgaFleet.addVehicle(new Bus("XX1111XX"));
mgaFleet.addVehicle(new Bus("YY2222YY"));
mgaFleet.addVehicle(new Car("AB1111CD"));
mgaFleet.addVehicle(new Car("EF2222GH"));

console.log(mgaFleet.getVehicles());

const selectListe = document.querySelector("#ListOfVehicles") ! as HTMLSelectElement;
selectListe.innerHTML = createSelectedVehicleList();

function createSelectedVehicleList() : string {
    let txt = "";
    for(let vehicle of mgaFleet.getVehicles()) {
        txt += `<option value="${vehicle.matriculation}">${vehicle.type} : ${vehicle.matriculation}</option>`;
    }
    return txt;
}


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

    rentVehicle(vehicle:T) {
        this._list.splice(this._list.indexOf(vehicle),1);
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

    rentVehicleMatriculation(matriculation:string) {
        let vehicle = this.getVehicleMatriculation(matriculation); //vehicle or null
        if(vehicle) {
            if(vehicle.type === TypeVehicle.BUS) {
                this._bus.rentVehicle(vehicle);
            } else if(vehicle.type === TypeVehicle.CAR) {
                this._cars.rentVehicle(vehicle);
            }
        } else {
            throw {message : "Erreur d'immatriculation"};
        }
    }

    private getVehicleMatriculation(matriculation:string) : Vehicle|null {
        let vehicles = this.getVehicles(); //table of all vehicles in the fleet
        for(let vehicle of vehicles) {
            if(vehicle.matriculation === matriculation) {
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

const selectList = document.querySelector("#ListOfVehicles") ! as HTMLSelectElement;
selectList.innerHTML = createSelectedVehicleList();

const rentButton = document.querySelector("#Rent") ! as HTMLButtonElement;
rentButton.addEventListener("click", () => {
    const matriculation = selectList.value;
    mgaFleet.rentVehicleMatriculation(matriculation);
    // Update of the selected list of matriculation
    selectList.innerHTML = createSelectedVehicleList();
})

function createSelectedVehicleList() : string {
    let txt = "";
    for(let vehicle of mgaFleet.getVehicles()) {
        txt += `<option value="${vehicle.matriculation}">${vehicle.type} : ${vehicle.matriculation}</option>`;
    }
    return txt;
}


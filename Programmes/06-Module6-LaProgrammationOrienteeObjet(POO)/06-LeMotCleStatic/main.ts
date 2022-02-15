class Toolbox {
    public static displayTable(table : any[]) {
        for(let element of table) {
            console.log(element);
        }
    }

    public static calculationAverage(...numbers:number[]) {
        let average = 0;
        for(let number of numbers) {
            average += number;
        }
        return average/numbers.length;
    }
}

class carFleet {
    public carList:Car[] = [];
    // public busList:Bus[] = [];
}

class Car {
    // class constants
    public static readonly VAT:number = 20;
    // keep all instances that have been made of the Car class
    public static carList:Car[] = [];

    constructor(
        // underscore to say that it is private information
        private _brand : string,
        private _model : string,
        private _color : string,
        private _numberOfDoors : number,
        // With readonly, once the value is done, the value is not modifiable anymore
        // Specific object constant
        public readonly year : number
        ) {
        // this.brand = brand;
        // this.model = model;
        // this.color = color;
        // this.numberOfDoors = numberOfDoors;
        // this.year = year;
    }

    public static getCars() {
        //get Cars from a database.
    }

    public static addCarList(car: Car) {
        Car.carList.push(car);
    }

    public static removeCarList() {
        Car.carList.pop();
    }

    public showCar(this:Car) {
        console.log("Marque : " + this._brand);
        console.log("Modèle : " + this._model);
        this.showColor();
        console.log("Nombre de portes : " + this._numberOfDoors);
        console.log("Annee de construction : " + this.year);
        console.log(Car.VAT);
    }

    private showColor() {
        console.log("Couleur : " + this._color);
    }

    // Getters Setters TypeScript
    get brand() : string {return this._brand;}
    get model() : string {return this._model;}
    set brand(newBrand:string) {
        console.log("Setter de la marque");
        this._brand = newBrand;
    }
    set model(newModel:string) {
        console.log("Setter du modele")
        this._model = newModel;
    }

    /**
     * GETTERS Standard
     */
    // public getBrand() : string {return this.brand;}
    // public getModel() : string {return this.model;}
    // public getNbPortes() : number {return this.numberOfDoors;};

    /**
     * SETTERS Standard
     */
    // public setBrand(brand:string) : Car {
    //     if(brand === "Gepo" || brand === "Yotota") {
    //         this.brand = brand;
    //     }
    //     return this;
    // }
    // chaining of functions
    // public setModel(model:string) : Car {
    //     this.model = model;
    //     return this;
    // }
    // public setNumberOfDoors(numberOfDoors : number) {
    //     if(numberOfDoors === 5 || numberOfDoors === 3) {
    //         this.numberOfDoors = numberOfDoors;
    //     }
    // }
}

// Specific object constant
var car1 = new Car("Yotota","Ryias","rouge",5,2020);
var car2 = new Car("Yotota","Risau","noire",3,2021);

// console.log(Car.VAT);

Car.addCarList(car1);
Car.addCarList(car2);

Toolbox.displayTable(Car.carList);

let ratings = [ 10 , 15, 20];

Toolbox.displayTable(ratings);

console.log(Toolbox.calculationAverage(10,15,20,25,100,200));

// car1.showCar();
// car2.showCar();

// var fleetMGA = new carFleet();
// fleetMGA.carList.push(car1,car2);
// console.log(fleetMGA.carList);
class Toolbox {
    static displayTable(table) {
        for (let element of table) {
            console.log(element);
        }
    }
    static calculationAverage(...numbers) {
        let average = 0;
        for (let number of numbers) {
            average += number;
        }
        return average / numbers.length;
    }
}
class carFleet {
    constructor() {
        this.carList = [];
        // public busList:Bus[] = [];
    }
}
class Car {
    constructor(
    // underscore to say that it is private information
    _brand, _model, _color, _numberOfDoors, 
    // With readonly, once the value is done, the value is not modifiable anymore
    // Specific object constant
    year) {
        this._brand = _brand;
        this._model = _model;
        this._color = _color;
        this._numberOfDoors = _numberOfDoors;
        this.year = year;
        // this.brand = brand;
        // this.model = model;
        // this.color = color;
        // this.numberOfDoors = numberOfDoors;
        // this.year = year;
    }
    static getCars() {
        //get Cars from a database.
    }
    static addCarList(car) {
        Car.carList.push(car);
    }
    static removeCarList() {
        Car.carList.pop();
    }
    showCar() {
        console.log("Marque : " + this._brand);
        console.log("Modèle : " + this._model);
        this.showColor();
        console.log("Nombre de portes : " + this._numberOfDoors);
        console.log("Annee de construction : " + this.year);
        console.log(Car.VAT);
    }
    showColor() {
        console.log("Couleur : " + this._color);
    }
    // Getters Setters TypeScript
    get brand() { return this._brand; }
    get model() { return this._model; }
    set brand(newBrand) {
        console.log("Setter de la marque");
        this._brand = newBrand;
    }
    set model(newModel) {
        console.log("Setter du modele");
        this._model = newModel;
    }
}
// class constants
Car.VAT = 20;
// keep all instances that have been made of the Car class
Car.carList = [];
// Specific object constant
var car1 = new Car("Yotota", "Ryias", "rouge", 5, 2020);
var car2 = new Car("Yotota", "Risau", "noire", 3, 2021);
// console.log(Car.VAT);
Car.addCarList(car1);
Car.addCarList(car2);
Toolbox.displayTable(Car.carList);
let ratings = [10, 15, 20];
Toolbox.displayTable(ratings);
console.log(Toolbox.calculationAverage(10, 15, 20, 25, 100, 200));
// car1.showCar();
// car2.showCar();
// var fleetMGA = new carFleet();
// fleetMGA.carList.push(car1,car2);
// console.log(fleetMGA.carList);

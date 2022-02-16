class Car {
    constructor(
    // underscore to say that it is private information
    _brand, _model, _color, _numberOfDoors, 
    // With readonly, once the value is done, the value is not modifiable anymore
    // Specific object constant
    _year) {
        this._brand = _brand;
        this._model = _model;
        this._color = _color;
        this._numberOfDoors = _numberOfDoors;
        this._year = _year;
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
        console.log("Annee de construction : " + this._year);
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
class RaceCar extends Car {
    constructor(brand, model, numberOfDoors, year, _speed) {
        super(brand, model, "Bleue", numberOfDoors, year);
        this._speed = _speed;
    }
    displaySpeed() {
        console.log("La vitesse max est de : " + this._speed);
    }
    showCar() {
        super.showCar();
        this.displaySpeed();
    }
}
class VintageCar extends Car {
    constructor(brand, model, numberOfDoors, year) {
        super(brand, model, "Noire", numberOfDoors, year);
    }
}
var car1 = new Car("Yotota", "Ryias", "rouge", 5, 2020);
var car2 = new RaceCar("Yotota", "Risau", 3, 2021, 200);
var car3 = new VintageCar("Yotota", "Ryias", 5, 1999);
car1.showCar();
car2.showCar();
car3.showCar();
Car.addCarList(car1);
Car.addCarList(car2);
Car.addCarList(car3);

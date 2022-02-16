// Interfaces allow to define a structure of a class and can't be instantiated. A class can implement several interfaces.
// The difference between abstract classes and interfaces is that interfaces do not define any code implementation
interface Vehicle {
    mass : number;
    calculationWeight() : number;
}

interface Rolling {
    numberOfWheels : number;
}

class Bike implements Rolling {
    public numberOfWheels : number = 2;
}

// The Car class can't be instantiated anymore, will have to be instantiated through a child class
// implements Vehicule => forces the implementation of the mass attribute and of the function calculationWeight. Be careful, it is not possible to define a private attribute coming from an interface.
abstract class Car implements Vehicle, Rolling {
    // class constants
    public static readonly VAT:number = 20;
    // keep all instances that have been made of the Car class
    public static carList:Car[] = [];

    constructor(
        // underscore to say that it is private information
        protected _brand : string,
        protected _model : string,
        protected _color : string,
        protected _numberOfDoors : number,
        // With readonly, once the value is done, the value is not modifiable anymore
        // Specific object constant
        protected readonly _year : number,
        public mass:number,
        public readonly numberOfWheels : number = 4
        ) {
    }

    public calculationWeight() : number {
        return this.mass * 9.81;
    }

    public static addCarList(car: Car) : void {
        Car.carList.push(car);
    }

    public static removeCarList() : void {
        Car.carList.pop();
    }

    abstract showCar(this:Car);

    protected showColor() : void {
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
}

class RaceCar extends Car {

    constructor(
        brand : string,
        model : string,
        numberOfDoors : number,
        year : number,
        mass : number,
        private _speed : number
        ) {
            super(brand,model,"Bleue",numberOfDoors,year,mass);
    }
    
    public displaySpeed() {
        console.log("La vitesse max est de : " + this._speed);
    }

    public showCar(this:RaceCar) {
        console.log("Marque : " + this._brand);
        console.log("Modèle : " + this._model);
        this.showColor();
        console.log("Nombre de portes : " + this._numberOfDoors);
        console.log("Annee de construction : " + this._year);
        console.log(Car.VAT);
        this.displaySpeed();
        console.log("Masse : " + this.mass);
        console.log("Poids : " + this.calculationWeight());
        console.log("Nombres de roues : "+this.numberOfWheels);
    }
}

class VintageCar extends Car {
    constructor(
        brand : string,
        model : string,
        numberOfDoors : number,
        year : number
        ) {
            super(brand,model,"Noire",numberOfDoors,year,300);
    }
    
    public showCar(this:VintageCar) {
        console.log("Marque : " + this._brand);
        console.log("Modèle : " + this._model);
        this.showColor();
        console.log("Nombre de portes : " + this._numberOfDoors);
        console.log("Annee de construction : " + this._year);
        console.log("Masse : " + this.mass);
        console.log("Poids : " + this.calculationWeight());
        console.log("Nombres de roues : "+this.numberOfWheels);
    }
}

var car1 = new RaceCar("Yotota","Rotyalo",5,2020,450,300);
var car2 = new RaceCar("Yotota","Risau",3,2021,400,200);
var car3 = new VintageCar("Yotota","Ryias",5,1999);

car1.showCar();
console.log("-------------------")
car2.showCar();
console.log("-------------------")
car3.showCar();

Car.addCarList(car1);
Car.addCarList(car2);
Car.addCarList(car3);


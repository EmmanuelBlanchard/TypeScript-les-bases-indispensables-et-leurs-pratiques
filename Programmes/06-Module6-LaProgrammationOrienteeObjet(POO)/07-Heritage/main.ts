class Car {
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
        protected readonly _year : number
        ) {
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
        console.log("Annee de construction : " + this._year);
        console.log(Car.VAT);
    }

    protected showColor() {
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
        private _speed : number
        ) {
            super(brand,model,"Bleue",numberOfDoors,year);
        }
    
    public displaySpeed() {
        console.log("La vitesse max est de : " + this._speed);
    }

    public showCar(this:RaceCar) {
        super.showCar();
        this.displaySpeed();
    }
}

class VintageCar extends Car {
    constructor(
        brand : string,
        model : string,
        numberOfDoors : number,
        year : number
        ) {
            super(brand,model,"Noire",numberOfDoors,year);
        }
}


var car1 = new Car("Yotota","Ryias","rouge",5,2020);
var car2 = new RaceCar("Yotota","Risau",3,2021,200);
var car3 = new VintageCar("Yotota","Ryias",5,1999)

car1.showCar();

car2.showCar();

car3.showCar();

Car.addCarList(car1);
Car.addCarList(car2);
Car.addCarList(car3);


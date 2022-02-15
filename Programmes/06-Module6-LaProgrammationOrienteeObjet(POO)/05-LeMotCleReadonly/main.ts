class Car {
    // Identical object constant
    // public readonly year : number = 2020;

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

    public showCar(this:Car) {
        console.log("Marque : " + this._brand);
        console.log("Modèle : " + this._model);
        this.showColor();
        console.log("Nombre de portes : " + this._numberOfDoors);
        console.log("Annee de construction : " + this.year);
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

car1.showCar();
car2.showCar();

// Display with the specific object constant
/*
Marque : Yotota
Modèle : Ryias
Couleur : rouge
Nombre de portes : 5
Annee de construction : 2020
Marque : Yotota
Modèle : Risau
Couleur : noire
Nombre de portes : 3
Annee de construction : 2021
*/

// Identical object constant
// var car1 = new Car("Yotota","Ryias","rouge",5);
// var car2 = new Car("Yotota","Risau","noire",3);

// car1.showCar();
// car2.showCar();

// Display with the identical object constant
/*
Marque : Yotota
Modèle : Ryias
Couleur : rouge
Nombre de portes : 5
Annee de construction : 2020
Marque : Yotota
Modèle : Risau
Couleur : noire
Nombre de portes : 3
Annee de construction : 2020
*/
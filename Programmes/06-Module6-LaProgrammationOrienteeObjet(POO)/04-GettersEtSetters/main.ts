class Car {

    constructor(
        // underscore to say that it is private information
        private _brand : string,
        private _model : string,
        private _color : string,
        private _numberOfDoors : number,
        ) {
        // this.brand = brand;
        // this.model = model;
        // this.color = color;
        // this.numberOfDoors = numberOfDoors;
    }

    public showCar(this:Car) {
        console.log("Marque : " + this._brand);
        console.log("Modèle : " + this._model);
        this.showColor();
        console.log("Nombre de portes : " + this._numberOfDoors);
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

var car1 = new Car("Yotota","Ryias","rouge",5);
var car2 = new Car("Yotota","Risau","noire",3);

car1.showCar();

// chaining of functions (SETTERS Standard)
// car1.setBrand("Gepo").setModel("803");

// Calling the brand getter => get brand() : string, on the attribute _brand (TypeScript)
console.log("Car 1, the brand is : " + car1.brand);
// Calling the brand setter => set brand(newBrand:string), on the attribute _brand (TypeScript)
car1.brand = "Gepo";
// Calling the model setter => set model(newModel:string), on the attribute _brand (TypeScript)
car1.model = "803";
car1.showCar();


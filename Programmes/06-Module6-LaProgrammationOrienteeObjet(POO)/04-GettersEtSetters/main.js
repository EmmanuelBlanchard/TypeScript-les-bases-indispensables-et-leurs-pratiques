class Car {
    constructor(
    // underscore to say that it is private information
    _brand, _model, _color, _numberOfDoors) {
        this._brand = _brand;
        this._model = _model;
        this._color = _color;
        this._numberOfDoors = _numberOfDoors;
        // this.brand = brand;
        // this.model = model;
        // this.color = color;
        // this.numberOfDoors = numberOfDoors;
    }
    showCar() {
        console.log("Marque : " + this._brand);
        console.log("Modèle : " + this._model);
        this.showColor();
        console.log("Nombre de portes : " + this._numberOfDoors);
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
var car1 = new Car("Yotota", "Ryias", "rouge", 5);
var car2 = new Car("Yotota", "Risau", "noire", 3);
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

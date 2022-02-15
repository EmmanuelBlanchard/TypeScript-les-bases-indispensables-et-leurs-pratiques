class Car {
    // Identical object constant
    // public readonly year : number = 2020;
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
    showCar() {
        console.log("Marque : " + this._brand);
        console.log("Modèle : " + this._model);
        this.showColor();
        console.log("Nombre de portes : " + this._numberOfDoors);
        console.log("Annee de construction : " + this.year);
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
// Specific object constant
var car1 = new Car("Yotota", "Ryias", "rouge", 5, 2020);
var car2 = new Car("Yotota", "Risau", "noire", 3, 2021);
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

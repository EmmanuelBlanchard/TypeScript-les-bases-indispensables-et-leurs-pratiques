class Car {
    constructor(brand, model, color, numberOfDoors) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.numberOfDoors = numberOfDoors;
    }
    showCar() {
        console.log("Marque : " + this.brand);
        console.log("Modèle : " + this.model);
        console.log("Couleur : " + this.color);
        console.log("Nombre de portes : " + this.numberOfDoors);
    }
}
var car1 = new Car("Yotota", "Ryias", "rouge", 5);
var car2 = new Car("Yotota", "Risau", "noire", 3);
car1.showCar();
console.log("-----------------------");
car2.showCar();

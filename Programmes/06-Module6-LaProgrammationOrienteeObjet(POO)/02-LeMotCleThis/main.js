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
        this.showColor();
        console.log("Nombre de portes : " + this.numberOfDoors);
    }
    showColor() {
        console.log("Couleur : " + this.color);
    }
}
var car1 = new Car("Yotota", "Ryias", "rouge", 5);
var car2 = new Car("Yotota", "Risau", "noire", 3);
car1.showCar();
console.log("-----------------------");
car2.showCar();
console.log("-----------------------");
let displays = {
    // showCar: car1.showCar.bind(car1)
    // Other solution with arrow functions, ES6 syntax to keep the context of the keyword this
    showCar: () => car1.showCar()
};
displays.showCar();

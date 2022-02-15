class Car {
    constructor(brand, model, color, numberOfDoors) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.numberOfDoors = numberOfDoors;
        // this.brand = brand;
        // this.model = model;
        // this.color = color;
        // this.numberOfDoors = numberOfDoors;
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
    changeNumberOfDoors(numberOfDoors) {
        if (numberOfDoors === 5 || numberOfDoors === 3) {
            this.numberOfDoors = numberOfDoors;
        }
    }
}
var car1 = new Car("Yotota", "Ryias", "rouge", 5);
var car2 = new Car("Yotota", "Risau", "noire", 3);
car1.showCar();
console.log("-----------------------");
car2.showCar();
console.log("-----------------------");
car2.changeNumberOfDoors(5);
car2.showCar();

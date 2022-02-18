import { ClassFood, Food } from "./Food.class.js";
export class Fruit extends Food {
    constructor(name, calorie, lipid, carbohydrate, protein, image) {
        super(name, ClassFood.GOOD, calorie, lipid, carbohydrate, protein, image);
        Fruit.fruitList.push(this);
    }
    showFood() {
        console.log("Fruit : " + this._name);
        this.afficherValeursNutritionnelles();
    }
}
Fruit.fruitList = [];
//# sourceMappingURL=Fruit.class.js.map
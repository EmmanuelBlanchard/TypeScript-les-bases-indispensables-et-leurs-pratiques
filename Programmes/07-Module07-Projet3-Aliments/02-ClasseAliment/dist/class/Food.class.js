"use strict";
var ClassFood;
(function (ClassFood) {
    ClassFood["BAD"] = "C";
    ClassFood["AVERAGE"] = "B";
    ClassFood["GOOD"] = "A";
})(ClassFood || (ClassFood = {}));
;
class Food {
    constructor(_name, _health, calorie, lipid, carbohydrate, protein, _image) {
        this._name = _name;
        this._health = _health;
        this.calorie = calorie;
        this.lipid = lipid;
        this.carbohydrate = carbohydrate;
        this.protein = protein;
        this._image = _image;
        Food.foodList.push(this);
    }
    get name() { return this._name; }
    ;
    get health() { return this._health; }
    ;
    get image() { return this._image; }
    ;
    set name(newName) { this._name = newName; }
    ;
    set health(newHealth) { this._health = newHealth; }
    ;
    set image(newImage) { this._image = newImage; }
    ;
}
Food.foodList = [];
let food1 = new Food("Pomme", ClassFood.GOOD, 54, 0.17, 14, 0.3, "pomme.png");
let food2 = new Food("Salami", ClassFood.BAD, 270, 26.5, 1.3, 12, "salami.png");
console.log(Food.foodList);
//# sourceMappingURL=Food.class.js.map
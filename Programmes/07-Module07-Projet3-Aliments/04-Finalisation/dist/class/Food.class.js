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
    afficherValeursNutritionnelles() {
        console.log("Valeurs nutritionnelles :");
        console.log("Lipide : " + this.lipid);
        console.log("Glucide : " + this.carbohydrate);
        console.log("Proteine : " + this.protein);
    }
}
Food.foodList = [];
//# sourceMappingURL=Food.class.js.map
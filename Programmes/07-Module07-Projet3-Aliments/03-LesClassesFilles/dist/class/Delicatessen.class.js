"use strict";
class Delicatessen extends Food {
    constructor(name, calorie, lipid, carbohydrate, protein, image) {
        super(name, ClassFood.BAD, calorie, lipid, carbohydrate, protein, image);
        Delicatessen.delicatessenList.push(this);
    }
    showFood() {
        console.log("Charcuterie : " + this._name);
        this.afficherValeursNutritionnelles();
    }
}
Delicatessen.delicatessenList = [];
//# sourceMappingURL=Delicatessen.class.js.map
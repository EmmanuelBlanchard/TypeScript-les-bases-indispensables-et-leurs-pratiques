"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var App;
(function (App) {
    var ClassFood;
    (function (ClassFood) {
        ClassFood["BAD"] = "C";
        ClassFood["AVERAGE"] = "B";
        ClassFood["GOOD"] = "A";
    })(ClassFood = App.ClassFood || (App.ClassFood = {}));
    ;
    var Food = /** @class */ (function () {
        function Food(_name, _health, calorie, lipid, carbohydrate, protein, _image) {
            this._name = _name;
            this._health = _health;
            this.calorie = calorie;
            this.lipid = lipid;
            this.carbohydrate = carbohydrate;
            this.protein = protein;
            this._image = _image;
            Food.foodList.push(this);
        }
        Object.defineProperty(Food.prototype, "name", {
            get: function () { return this._name; },
            set: function (newName) { this._name = newName; },
            enumerable: false,
            configurable: true
        });
        ;
        Object.defineProperty(Food.prototype, "health", {
            get: function () { return this._health; },
            set: function (newHealth) { this._health = newHealth; },
            enumerable: false,
            configurable: true
        });
        ;
        Object.defineProperty(Food.prototype, "image", {
            get: function () { return this._image; },
            set: function (newImage) { this._image = newImage; },
            enumerable: false,
            configurable: true
        });
        ;
        ;
        ;
        ;
        Food.prototype.afficherValeursNutritionnelles = function () {
            console.log("Valeurs nutritionnelles :");
            console.log("Lipide : " + this.lipid);
            console.log("Glucide : " + this.carbohydrate);
            console.log("Proteine : " + this.protein);
        };
        Food.foodList = [];
        return Food;
    }());
    App.Food = Food;
})(App || (App = {}));
/// <reference path="Food.class.ts" />
var App;
(function (App) {
    var Fruit = /** @class */ (function (_super) {
        __extends(Fruit, _super);
        function Fruit(name, calorie, lipid, carbohydrate, protein, image) {
            var _this = _super.call(this, name, App.ClassFood.GOOD, calorie, lipid, carbohydrate, protein, image) || this;
            Fruit.fruitList.push(_this);
            return _this;
        }
        Fruit.prototype.showFood = function () {
            console.log("Fruit : " + this._name);
            this.afficherValeursNutritionnelles();
        };
        Fruit.fruitList = [];
        return Fruit;
    }(App.Food));
    App.Fruit = Fruit;
})(App || (App = {}));
/// <reference path="Food.class.ts" />
var App;
(function (App) {
    var Delicatessen = /** @class */ (function (_super) {
        __extends(Delicatessen, _super);
        function Delicatessen(name, calorie, lipid, carbohydrate, protein, image) {
            var _this = _super.call(this, name, App.ClassFood.BAD, calorie, lipid, carbohydrate, protein, image) || this;
            Delicatessen.delicatessenList.push(_this);
            return _this;
        }
        Delicatessen.prototype.showFood = function () {
            console.log("Charcuterie : " + this._name);
            this.afficherValeursNutritionnelles();
        };
        Delicatessen.delicatessenList = [];
        return Delicatessen;
    }(App.Food));
    App.Delicatessen = Delicatessen;
})(App || (App = {}));
/// <reference path="class/Food.class.ts" />
/// <reference path="class/Fruit.class.ts" />
/// <reference path="class/Delicatessen.class.ts" />
var App;
(function (App) {
    new App.Fruit("Pomme", 54, 0.3, 12, 0.3, "pomme.png");
    new App.Fruit("Poire", 60, 0.1, 14, 0.4, "poire.png");
    new App.Delicatessen("Salami", 309, 24, 1, 22, "salami.png");
    new App.Delicatessen("Saucisson", 422, 34.7, 0.9, 26.6, "saucisson.png");
    var listFoodClass = {
        bad: App.Delicatessen.delicatessenList,
        average: [],
        good: App.Fruit.fruitList,
    };
    listFood();
    document.querySelector("#type").addEventListener("change", listFood);
    function listFood() {
        var typeFoodDesired = document.querySelector("#type").value;
        var foods = getListFoodType(typeFoodDesired);
        var tBodyTag = document.querySelector("#listOfFoods");
        var listFoodTag = "";
        if (foods.length > 0) {
            for (var _i = 0, foods_1 = foods; _i < foods_1.length; _i++) {
                var food = foods_1[_i];
                listFoodTag += "\n                    <tr>\n                        <td>".concat(food.name, "</td>\n                        <td>").concat(food.lipid, "</td>\n                        <td>").concat(food.carbohydrate, "</td>\n                        <td>").concat(food.protein, "</td>\n                        <td>").concat(food.health, "</td>\n                        <td><img src=\"images/").concat(food.image, "\" width=\"100px\"/></td>\n                    </tr>\n                ");
            }
            tBodyTag.innerHTML = listFoodTag;
        }
        else {
            tBodyTag.innerHTML = "Aucune données";
        }
    }
    function getListFoodType(type) {
        switch (type) {
            case "All":
                return App.Food.foodList;
                break;
            case "Bad":
                return listFoodClass.bad;
                break;
            case "Average":
                return listFoodClass.average;
                break;
            case "Good":
                return listFoodClass.good;
                break;
            default: return [];
        }
    }
})(App || (App = {}));
//# sourceMappingURL=bundle.js.map
var CLASS;
(function (CLASS) {
    CLASS["WARRIOR"] = "Warrior";
    CLASS["THIEF"] = "Thief";
    CLASS["ARCHER"] = "Archer";
})(CLASS || (CLASS = {}));
;
var person1 = {
    name: "Matthieu",
    "class": CLASS.WARRIOR
};
console.log(CLASS.WARRIOR);
console.log(person1);

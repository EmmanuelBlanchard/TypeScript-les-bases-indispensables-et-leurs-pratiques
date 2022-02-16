var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var human1 = { name: "Tya", age: 18 };
var orc1 = { name: "Gael", tribe: "Orc vert" };
var warrior1 = createWarrior(human1);
var warrior2 = createWarrior(orc1);
function createWarrior(player) {
    return __assign(__assign({}, player), { "class": "Guerrier" });
}
console.log(warrior1, warrior2);

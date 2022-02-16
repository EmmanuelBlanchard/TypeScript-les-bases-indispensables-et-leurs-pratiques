enum ClassFood {BAD="C",AVERAGE="B",GOOD="A"};

class Food {
    public static foodList : Food[] = [];

    constructor(
        private _name:string,
        private _health:ClassFood,
        public readonly calorie:number,
        public readonly lipid:number,
        public readonly carbohydrate:number,
        public readonly protein:number,
        private _image: string
        ) {
            Food.foodList.push(this);
    }

    get name() : string {return this._name};
    get health() : ClassFood {return this._health};
    get image() : string {return this._image};
    
    set name(newName:string) {this._name=newName};
    set health(newHealth:ClassFood) {this._health = newHealth};
    set image(newImage:string) {this._image = newImage};
}

let food1 = new Food("Pomme",ClassFood.GOOD,54,0.17,14,0.3,"pomme.png");
let food2 = new Food("Salami",ClassFood.BAD,270,26.5,1.3,12,"salami.png");

console.log(Food.foodList);


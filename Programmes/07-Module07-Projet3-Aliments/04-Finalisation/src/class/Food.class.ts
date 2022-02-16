enum ClassFood {BAD="C",AVERAGE="B",GOOD="A"};

abstract class Food {
    public static foodList : Food[] = [];

    constructor(
        protected _name:string,
        protected _health:ClassFood,
        public readonly calorie:number,
        public readonly lipid:number,
        public readonly carbohydrate:number,
        public readonly protein:number,
        protected _image: string
        ) {
            Food.foodList.push(this);
    }

    get name() : string {return this._name};
    get health() : ClassFood {return this._health};
    get image() : string {return this._image};
    
    set name(newName:string) {this._name=newName};
    set health(newHealth:ClassFood) {this._health = newHealth};
    set image(newImage:string) {this._image = newImage};

    abstract showFood() : void;

    protected afficherValeursNutritionnelles() {
        console.log("Valeurs nutritionnelles :");
        console.log("Lipide : " + this.lipid);
        console.log("Glucide : " + this.carbohydrate);
        console.log("Proteine : " + this.protein);
    }

}


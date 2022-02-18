import { ClassFood,Food } from "./Food.class.js";

export class Fruit extends Food {
    public static fruitList:Fruit[] = [];

    constructor(
        name:string,
        calorie:number,
        lipid:number,
        carbohydrate:number,
        protein:number,
        image: string
        ){
            super(name,ClassFood.GOOD,calorie,lipid,carbohydrate,protein,image);
            Fruit.fruitList.push(this);
    }

    public showFood() {
        console.log("Fruit : " + this._name);
        this.afficherValeursNutritionnelles();
    }
}


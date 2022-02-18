import { ClassFood,Food } from "./Food.class.js";

export class Delicatessen extends Food {
    public static delicatessenList:Delicatessen[] = [];

    constructor(
        name:string,
        calorie:number,
        lipid:number,
        carbohydrate:number,
        protein:number,
        image:string
        ){
            super(name,ClassFood.BAD,calorie,lipid,carbohydrate,protein,image);
            Delicatessen.delicatessenList.push(this);
        }
    
    public showFood() {
        console.log("Charcuterie : " + this._name);
        this.afficherValeursNutritionnelles();
    }
}


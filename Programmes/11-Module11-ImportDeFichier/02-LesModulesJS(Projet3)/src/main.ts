import { ClassFood,Food } from "./class/Food.class.js";
import { Fruit } from "./class/Fruit.class.js";
import { Delicatessen } from "./class/Delicatessen.class.js";

new Fruit("Pomme",54,0.3,12,0.3,"pomme.png");
new Fruit("Poire",60,0.1,14,0.4,"poire.png");
new Delicatessen("Salami",309,24,1,22,"salami.png");
new Delicatessen("Saucisson",422,34.7,0.9,26.6,"saucisson.png");

let listFoodClass = {
    bad : Delicatessen.delicatessenList,
    average : [],
    good : Fruit.fruitList,
}

listFood();
(document.querySelector("#type")! as HTMLSelectElement).addEventListener("change", listFood);

function listFood() {
    const typeFoodDesired = (document.querySelector("#type") ! as HTMLSelectElement).value;
    let foods = getListFoodType(typeFoodDesired);
    
    const tBodyTag = document.querySelector("#listOfFoods") ! as HTMLTableElement ;  
    
    let listFoodTag = "";
    if(foods.length > 0) {
        for(let food of foods) {
            listFoodTag += `
                <tr>
                    <td>${food.name}</td>
                    <td>${food.lipid}</td>
                    <td>${food.carbohydrate}</td>
                    <td>${food.protein}</td>
                    <td>${food.health}</td>
                    <td><img src="images/${food.image}" width="100px"/></td>
                </tr>
            `;
        }
        tBodyTag.innerHTML = listFoodTag;
    } else {
        tBodyTag.innerHTML = "Aucune données";
    }

}

function getListFoodType(type:string) : any[] {
    switch(type) {
        case "All" : return Food.foodList;
        break;
        case "Bad" : return listFoodClass.bad;
        break;
        case "Average" : return listFoodClass.average;
        break;
        case "Good" : return listFoodClass.good;
        break;
        default : return [];
    }
}


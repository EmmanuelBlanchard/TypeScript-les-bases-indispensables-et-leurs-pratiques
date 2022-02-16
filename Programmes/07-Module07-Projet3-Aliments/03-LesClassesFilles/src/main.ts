console.log("Hello World !");
console.log("------------------");

new Fruit("Pomme",54,0.3,12,0.3,"pomme.png");
new Fruit("Poire",60,0.1,14,0.4,"poire.png");
new Delicatessen("Salami",309,24,1,22,"salami.png");
new Delicatessen("Saucisson",422,34.7,0.9,26.6,"saucisson.png");

for(let food of Food.foodList) {
    food.showFood();
    console.log("------------------");
}

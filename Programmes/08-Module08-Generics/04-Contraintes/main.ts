type Human = {name:string,age:number};
type Orc = {name:string,tribe:string};

let human1:Human = {name:"Tya",age:18};
let orc1:Orc = {name:"Gael",tribe:"Orc vert"};

let warrior1 = createWarrior(human1);
let warrior2 = createWarrior(orc1);

let warrior3 = createWarrior({name:"toto",sexe:true});

function createWarrior<T extends{name:string}>(player:T) {
    return {
        ...player,
        class:"Guerrier"
    }
}

console.log(warrior1,warrior2,warrior3);
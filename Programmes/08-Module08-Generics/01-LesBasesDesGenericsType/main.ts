const ratings:number[] = [];
ratings.push(15,19,20);
const ratings2 = [15,19,20];

// Type Generic Array
const ratings3:Array<number> = [];
ratings3.push(10,15,20);

type Character = {
    name : string;
}

const characters:Array<Character> = [];

characters.push({name: "Matthieu"},{name : "Tya"});

const characters2 : Character[] = [];

function myFunction<Type>(param:Array<Type>) : Type {
    return param[0];
}

let rating1 = myFunction<number>([10,20,30]);
let firstName1 = myFunction<string>(["matthieu" , "Tya"]);
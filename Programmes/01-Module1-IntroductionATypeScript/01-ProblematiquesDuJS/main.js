console.log("Hello World !");

const inputNb1 = document.querySelector("#nb1");
const inputNb2 = document.querySelector("#nb2");

// console.log(inputNb1,inputNb2);

document.querySelector("#calcul").addEventListener("click", () => {
    // JS problematic, Transtyping from type string to type number
    let result = addition(inputNb1.value,inputNb2.value);
    
    // JS Problem Solving
    // let result = addition(parseInt(inputNb1.value),parseInt(inputNb2.value));

    // JS Problem Solving, ES6 Syntax
    // let result = addition(+inputNb1.value,+inputNb2.value);

    document.querySelector(".resultat").innerHTML = result;
});

function addition(nb1,nb2) {
    if(typeof(nb1) === "number" && typeof(nb2) === "number")
        return nb1 + nb2;
    else
        return "Les valeurs ne sont pas de type \"Number\"";
}

var inputNb1 = document.querySelector("#nb1");
var inputNb2 = document.querySelector("#nb2");
var divResult = document.querySelector(".resultat");
document.querySelector("#calcul").addEventListener("click", function () {
    var result = addition(+inputNb1.value, +inputNb2.value);
    divResult.innerHTML = result.toString();
});
function addition(nb1, nb2) {
    return nb1 + nb2;
}

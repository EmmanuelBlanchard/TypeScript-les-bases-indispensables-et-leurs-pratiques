var firstName = "Matthieu";
var age = 32;
var sexe = true;
var sports = ["foot", "rugby"];
var address = {
    line: "rue des fleurs",
    city: "Toulouse",
    zipCode: 31000
};
var afficherPersonne = function (in_first_name, in_age, in_sexe, in_sports, in_address) {
    console.log("Prenom : ".concat(in_first_name));
    console.log("Age : " + in_age);
    console.log("Sexe : " + (in_sexe ? "Homme" : "Femme"));
    for (var _i = 0, in_sports_1 = in_sports; _i < in_sports_1.length; _i++) {
        var sport = in_sports_1[_i];
        console.log(sport);
    }
    console.log("Adresse : ");
    console.log(in_address.line);
    console.log(in_address.zipCode + " " + in_address.city);
};
afficherPersonne(firstName, age, sexe, sports, address);

/*

    * Type << unknow >> : A la difference du type << any >>, le type << unknow >> indique que le type de

    * la variable n'est pas connu à l'avance. Il est ainsi plus restrictif.

    let varUnknow:any;
    varUnknow = 32;
    varUnknow = "Matthieu";
    var age:number = varUnknow;

    => Incohérence

    let varUnknow:unknow;
    varUnknow = 32;
    varUnknow = "Matthieu";
    var age:number = varUnknow;

    => Engendre une erreur

    let varUnknow:unknow;
    varUnknow = 32;
    varUnknow = "Matthieu";
    if(typeof varUnknow === "string") {
        var prenom : string = varUnknow;
    }
    if(typeof varUnknow === "number") {
        var age : number = varUnknow;
    }

    => Force à << mieux coder >>

    * Type << never >> : Ce type peut être << retourné >> par une fonction à la place de << void >> (vide).

    * << Never >> indique que la fonction ne retourne << jamais rien >>, alors que << void >> indique que la fonction retourne le << vide >>. L'utilisation de ce type est << intéressant >> lorsqu'on créé une fonction pour gérer des exceptions.

    function leverException(msg : string, codeErreur : number) : never {
        throw {message : msg, errorCode : codeErreur};
    }

    leverException("La page n'existe pas",404);

*/ 

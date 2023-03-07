//Fonction isLogged permettant de vérifier si les données sont correctes.
function isLogged(data1, data2) {
  message(data1, data2);
  if (data1 === true && data2 === true) {
    return true();
  } else {
    return false;
  }
}

//Fonction message permettant d'afficher le message si la personne est connectée.
function message(input1, input2) {
  if (input1 === "Ouze" && input2 === "azerty") {
    alert("Vous êtes connecté");
  } else {
    alert("Erreur, essayez une nouvelle fois");
    location.reload();
  }
}

//Générer un nombre aléatoire
//Faire deviner au joueur le nombre
//Jeu : Si Faux recommencer
//Jeu : Sinon Gagné
document.title = "Trouve le bon nombre !";

function isNumber() {
  let randomNb = Math.floor(Math.random() * 101);
  let guessNb;
  do {
    guessNb = prompt("Devine un nombre entre 1 et 100");
    if (guessNb > randomNb) {
      alert("Trop grand");
    } else if (guessNb < randomNb) {
      alert("Trop petit");
    } else if (isNaN(guessNb)) {
      alert("Ceci n'est pas un nombre");
    } else {
      alert("Trouvé");
    }
  } while (randomNb != guessNb);
}

isNumber();

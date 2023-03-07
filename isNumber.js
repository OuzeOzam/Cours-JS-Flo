//Générer un nombre aléatoire
//Faire deviner au joueur le nombre
//Jeu : Si Faux recommencer
//Jeu : Sinon Gagné

function isNumber() {
  let randomNb = Math.floor(Math.random() * 101);
  let guessNb;
  do {
    guessNb = prompt("Devine un nombre entre 1 et 100");
    if (guessNb > randomNb) {
      alert("Trop grand");
    } else if (guessNb < randomNb) {
      alert("Trop petit");
    } else {
      alert("Trouvé");
    }
  } while (randomNb != guessNb);
}

isNumber();

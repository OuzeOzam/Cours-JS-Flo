// function message() {
//   let text = prompt("Écrire du texte");
//   console.log("Vous avez écrit " + text);
// }

// message();

// function rendu(text) {
//   console.log("Vous avez écrit : " + text);
// }

// function question() {
//   let contenu = prompt("Écrire du texte");
//   rendu(contenu);
// }

// question();

// function message(username) {
//   console.log(username);
// }

// function signUp() {
//   let username = prompt("Enter ur username");
//   message(username);
// }

// signUp();

// function max(x, y) {
//   if (x > y) {
//     return x;
//   } else {
//     return y;
//   }
// }

//Fonction assMessage permettant de vérifier si les données sont correctes.
function accessMessage(username, password) {
  isLogged(username, password);
  if (username === true && password === true) {
    return true;
  } else {
    return false;
  }
}

//Fonction isLogged permettant d'afficher le message si la personne est connectée.
function isLogged(username, password) {
  if (username === "Ouze" && password === "azerty") {
    alert("Vous êtes connecté");
  } else {
    alert("intrus!!");
  }
}

//Fonction id permettant de demander les id de connexion
function id() {
  let username = prompt("Username");
  let password = prompt("Password");
  accessMessage(username, password);
}

id();

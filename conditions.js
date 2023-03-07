// Égal à
// 5 == 5 TRUE
// 4 = 5 False

// 4 != 3 TRUE
// 4 != 4 FALSE

// 4 < 4 FALSE
// 4 > 3 TRUE

// 4 >= 4 TRUE
// 3 >= 4 FALSE

//TOUJOURS UTILISER LE TRIPLE EQUALS

// const access = false;

// if (access){
//     console.log("Vous avez accès");
// }else{
//     console.log("Vous n'avez pas accès");
// }

const logged = false;
const bank = -5;

if (logged === true && bank >= 0) {
  alert("Vous êtes connecté");
  console.log(`Vous avez ${bank} sur votre compte`);
} else if (logged === true && bank < 0) {
  alert("Vous êtes connecté");
  console.log(`Vous êtes à découvert de ${bank}€`);
} else if (logged === false) {
  alert("Vous n'êtes pas connecté");
} else {
  alert("Error Serveur");
}

// // Truthy et Falsey
// const age = "";
// if (age) {
//   console.log("C'est une valeur est Vraie");
// } else {
//   console.log("C'est une valeur est Fausse");
// }
// // false, 0, null, undefined, NaN

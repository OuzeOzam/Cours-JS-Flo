// let number = 9;

// switch (number) {
//   case 1:
//     console.log("Le nombre est 1");
//     break;
//   case 2:
//     console.log("Le nombre est 2");
//     break;
//   case 3:
//     console.log("Le nombre est 3");
//     break;
//   case 4:
//     console.log("Le nombre est 4");
//     break;
//   case 5:
//     console.log("Le nombre est 5");
//     break;
//   case 6:
//     console.log("Le nombre est 6");
//     break;
//   case 7:
//     console.log("Le nombre est 7");
//     break;
//   default:
//     console.log("?");
//     break;
// }
let userInput = prompt("Choisissez un fruit");

let lowerCase = userInput.toLowerCase();

switch (lowerCase) {
  case "kiwi":
    alert("Les Kiwis sont vers et parfois jaunes");
    break;
  case "banane":
    alert("Banane");
    break;
  case "pomme":
    alert("pomme");
    break;
  default:
    alert("?");
    break;
}

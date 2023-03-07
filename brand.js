// function add() {
//   for (let i = 0; i < 3; i++) {
//     let marque = prompt("Ajoute une marque");
//     brands.push(marque);
//     console.log(brands[i]);
//   }
// }
const brands = [];

function add() {
  while (brands.length < 3) {
    let marque = prompt("Ajoute une marque");
    brands.push(marque);
    console.log(marque);
  }
  alert("Terminé");
}

add();

// let i = 0;
// while (i < 30) {
//   console.log(i);
//   // i += 3;
//   i++;
// }

// do {
//   console.log(i);
//   i++;
// } while (i < 10);

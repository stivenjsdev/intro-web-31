console.log("Ciclos");

console.log(undefined === "");
const arreglo = [];
let userInput = null;

// sintaxis while
/*
while (condicion) {
  //las instrucciones a ejecutar
}
*/
// while (!(userInput === "salir" || userInput === "exit")) {
//   userInput = prompt("Ingresa cualquier caracter").trim();
//   if (userInput !== "" && userInput !== "salir" && userInput !== "exit") {
//     arreglo.push(userInput);
//   }
// }

console.log(`Introduciste estos valores ${arreglo}`);
console.log(arreglo);

// sintaxis do while
/*
do {
  //las instrucciones a ejecutar
}
while(condicion);
*/

//contar numeros del 0 al 10 en consola
let contador = -1;
do {
  contador++;
  console.log(`contador: ${contador}`);
} while (contador <= 9);

// Sintaxis for
/*
for (
  [exprension-inicial];
  [condicion];
  [expresion-final-iteracion]
) {
  // bloque de codigo a ejecutar
}
*/

// ejecutar algo n veces
for (let i = 1; i <= 5; i++) {
  console.log(`i: ${i}`);
}

// i++ => i = i + 1
// ejecutar algo hasta que se cumpla una condicion

let noEncontrado = true;

for (let i = 0; noEncontrado; i++) {
  console.log(i);
  if (i === 3) {
    noEncontrado = false;
    console.log("Lo encontre!");
  }
}

// recorrer un arreglo
const senseis = ["stiven", "hiromi", "david"];

const senseisNumerados = [];

for (let i = 0; i < senseis.length; i++) {
  senseisNumerados.push(i+1 + ". " +  senseis[i]);
}

console.log(senseis);
console.log(senseisNumerados);
// arreglo.length retorna el tamaño o longitud del arreglo, osea cuantos elementos tiene.

for (let i = 0; i < senseis.length; i++) {
  const element = senseis[i];
  if (element === "david") {
    console.log(`Encontré a ${senseis[i]}`);
  }
}
// Operadores relacionales
// igual que
const miVar = "valor de miVar"; // nota = solito es un operador de asiganacion

console.log( 2 == "2" ); // TRUE
console.log( 2 === "2" ); // FALSE
console.log( 2 == "dos" ); //

// diferente o distinto que

console.log( 2 != "2" ); // FALSE
console.log( 2 !== "2" ); // TRUE

console.log( "hola".length <= "hola como estas".length );

const nula = null;

// Operadores logicos
// not
const tienePermisos = false;

console.log(!tienePermisos);

// valores Falsy y Truthy

if( {} ) {
  console.log("hola me cumpli");
}
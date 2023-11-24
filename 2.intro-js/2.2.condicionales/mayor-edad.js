// Ejercicio de condicionales en JS

// 1. pide al usuario que ingrese su age
let age = prompt("Ingrese su edad");

// 2. convierte la age a numero
age = Number(age);

// 3. usa condicionales para mostrar mensaje segun la edad
if (age < 12) {
  console.log("Eres un niño");
} else if (age < 18) {
  console.log("Eres un adolecente");
} else if (age < 30) {
  console.log("Eres un joven");
} else if (age < 60) {
  console.log("Eres un adulto");
} else {
  console.log("Eres un adulto mayor");
}

// 4. Haz lo mismo pero con el operador ternario
// condicion ? aqui va lo que se ejecuta si la cond es verd : aqui va lo que se ejecuta si la condicion es false

let message = (age < 18) ? "Eres menor de edad" : "Eres mayor de edad";

console.log("message:: ", message);

// 5. Haz lo mismo pero con switch
switch (true) {
  case (age < 12):
    console.log("niño");
  break;
  case (age < 18):
    console.log("adolecente");
  break;
  default:
    console.log("Adulto");
}

let student = prompt("Ingrese el nombre del estudiante");
switch (student) {
  case "Jeam":
    console.log("hagame esto");
  break;
  case "Juan":
    console.log("hagame esto otro");
  break;
  default:
    console.log("respuesta por defecto");
}

// 6. Haz lo mismo pero con objetos literales.

const saludar = {
  "Stiven": "Hola Sensei",
  "Jeam": "Hola Estudiante"
}

console.log(saludar[student] || "Ese estudiante no existe");
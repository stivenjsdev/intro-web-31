let edades = [21, 30, 14, 16, 19, 21, 30, 14, 16, 19, 21, 30, 14, 16, 19, 21, 30, 14, 16, 19, 21, 30, 14, 16, 19, 21, 30, 14, 16, 19, 21, 30, 14, 16, 19];

let calificacionHistoria = 98;

let calificacionFisica = 100;

let calificaciones = [100, 95, 80, 65, 90, calificacionHistoria, 100, 44, 90, calificacionFisica];

console.log("calificaiones", calificaciones);

console.log(edades);

console.log(edades[5]);

let nombres = ["Julio", "Ana", "Luis", "Pepe"];

console.log(nombres);
console.log(nombres[0]);
console.log(`El nombre del alumno es ${nombres[0]}`);
console.log(nombres[0].toUpperCase());

let nombre1 = nombres[0];

let info = [12, "hola", 14, 15, true, false];

console.log(info[3]);

let infoAlumno = {
    codigo: 23455,
    edad: 15,
    aprobado: true,
    ciudad: "CDMX"
};

let infoAlumno2 = {
    codigo: 2345,
    edad: 85,
}

let alumnos = [{codigo: 12345, edad: 19}, {codigo: 1345654, edad: 21}, infoAlumno, infoAlumno2];

console.log(alumnos);
console.log(alumnos[0].codigo);
console.log(alumnos[1].edad);

let ciudades = ['GDL', 'MTY', 'CDMX'];

console.log(ciudades);

//Modificar
ciudades[0] = 'CALI';
console.log(ciudades);
console.log(ciudades.length);

//Agregar un elemento
ciudades.push('OAX');
console.log(ciudades);

//Quita el último elemento
ciudades.pop();
console.log(ciudades);

//Agregar un elemeno al inicio del arreglo (posición 0)
ciudades.unshift('CNCN');
console.log(ciudades)

//Eliminar el primer elemento del arreglo (posición 0)
ciudades.shift();
console.log(ciudades)

let listaSuper = 'jitomate. ,cebolla. ,piña. ,aguacate. , perro';
let arraySuper = listaSuper.split('. ,');

console.log(arraySuper); // ["jitomate", "cebolla", "piña", "aguacate"]

// slice : extraer una porcion de un arreglo
// quiero extraer las frutas
const frutasSuper = arraySuper.slice(2,4);

console.log("nueva lista de frutas", frutasSuper);
console.log("lista super", arraySuper);

// quiero extrer solo las verduras
const verdurasSuper = arraySuper.slice(0, 2);

console.log("nueva lista de verduras", verdurasSuper);

// puedo aplicar varias veces el slice: si
const listaCosas = ["computador", "pelota", "mouse", "zapatillas"];
console.log(listaCosas);

const nuevaListaCosas = listaCosas.slice(1).slice(0,2).slice(0,1);

console.log("nueva lista de cosas", nuevaListaCosas);

// sort
const listaNum = [2, 1, 10, 11, 30, 33, 40, 3, 12, 5];

console.log( listaNum.sort(function(a, b) {return a - b}) );


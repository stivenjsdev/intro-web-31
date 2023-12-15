console.log("hello world");

// Spread Operator
// 1.
// aqui defino la funcion
function mostrarDatosEstudiante(nombreEstudiante, edadEstudiante, ...datosEstudiante) {
  console.log(nombreEstudiante);
  console.log(edadEstudiante);
  console.log(datosEstudiante);
  console.log(typeof datosEstudiante);
}

// aqui la mando a ejectura o a llamar
mostrarDatosEstudiante("Stiven", 31, "1993", "sensei", "cali", "colombia", "salsa");

// ejemplo practico: suma de n cantidad de parametros
function suma(...valores) {
  let acc = 0;
  // const resultado = valores.map(function(valor) {
  //   acc += valor;
  //   //acc = acc + valor;
  // })
  for (let i = 0; i < valores.length; i++) {
    const element = valores[i];
    acc = acc + element;
  }
  console.log(acc);
}

suma(1, 1, 4, 5, 10, 21);

//2
const numeros = [1, 2, 3];
console.log(numeros);
console.log(...numeros);

const numerosRaros = [20, 101, 69, ...numeros];
console.log(numerosRaros);

suma(...numerosRaros);

// String Templates
// funcion que me imprime en consola el nombre del estudiante y sus maestros
function saludarMaestros(nombreEstudiante, ...nombresMaestros) {
  let saludo = `Hola ${nombreEstudiante}, tiene los siguientes maestros: `;

  for (let i = 0; i < nombresMaestros.length; i++) {
    const maestro = nombresMaestros[i];
    if (maestro.trim()) {
      saludo += `${maestro}, `
    }
    
  }
  console.log(saludo);
}

saludarMaestros("Stiven", "  ", "Kami", "   ", "Nose");

// Funciones de Flecha o Arrow Funcitions
function hola(p1, p2) {}
// funcion anonmina
const miFunc = function (p1, p2) {}
// arrow functions
const miFunDeFlecha = (p1, p2) => { return "algo" }
const miFunDeFlechaCorta = (p1, p2) => "algo"

const miFun2 = p1 => {}

const miObj = {
  nombre: "stiven",
  cocinar: function() { 
    console.log( this );
    console.log("estoy cocinando...");
  },
  irBaño: () => {
    console.log("este es el this de ir al baño", this );
  }
}

miObj.irBaño();

//hoisting
saludar2();
function saludar2() { console.log("saludar 2"); }


const saludar3 = () => { console.log("saludar 3"); }
saludar3();


// Arreglos: FOREACH
const frutas = ["manzana", "fresa", "aguacate", "piña"]

for (let i = 0; i < frutas.length; i++) {
  const element = frutas[i];
  console.log(element);
}

console.log(".....");
// callback
const a = frutas.forEach((valor, i, arr) => {
  console.log(i);
  console.log(valor);
  console.log(arr);
  //frutas[i] = (i+1) + " " + frutas[i]
});

console.log("a", a);

const frutasNumeradas = frutas.map((item, index, arr) => {
  return `${index + 1}. ${item} de stiven`.toUpperCase();
});

console.log("frutas: ", frutas);
console.log("frutas Numeradas: ", frutasNumeradas);


// FILTER
const personas = [
  {
    nombre: "Stiven",
    edad: 31
  },
  {
    nombre: "Hiromi",
    edad: 36
  },
  {
    nombre: "Daniela",
    edad: 16
  }
];

const personasMayoresEdad = personas.filter((elemento, indice, arreglo) => elemento.edad < 18);

console.log(personasMayoresEdad);
console.log(personas);
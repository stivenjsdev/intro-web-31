// Ejercicio: El parque de diversiones!

// Imagina que estás creando un programa para determinar si los niños
// pueden acceder a un parque de diversiones basado en ciertos criterios.

// 1. Los niños deben tener al menos 10 años para ingresar.
// if (condicion) { codigo a ejecutar si la condion se cumple }

let edad = 8;

if ( edad >= 10 ) {
  console.log("Bienvenido al parque de diversiones!");
} else {
  console.log("Lo siento, eres demasiado joven para ingresar.");
}

// 2. además de la edad, deben tener una altura minima de 1.40 metros para poder montar en la montaña rusa.

let altura = 1.30;

if (edad >= 10 &&  altura >= 1.4) {
  console.log("Disfruta tu paseo en la montaña rusa!");
} else if ( edad >= 10  && altura < 1.4 ) {
  console.log("Eres lo suficientemente mayor, pero eres demasiado bajo para la montaña rusa.");
} else {
  console.log("Lo siento no cumples con los requsitos de edad y altura para ingresar.");
}

// 3. Si un niño es menor de 10 años pero tiene un pase VIP, puede ingresar sin importar cualquier criterio.

let paseVIP = true;

if ( edad < 10 && paseVIP ) {
  console.log("Bienvenido al parque de diversiones como invitado VIP!");
} else if (edad >= 10 &&  altura >= 1.4) {
  console.log("Disfruta tu paseo en la montaña rusa!");
} else if ( edad >= 10  && altura < 1.4 ) {
  console.log("Eres lo suficientemente mayor, pero eres demasiado bajo para la montaña rusa.");
} else {
  console.log("Lo siento no cumples con los requsitos de edad y altura para ingresar.");
}


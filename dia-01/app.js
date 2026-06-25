console.log("Hola Mundo");


/*
var nombre = "Miguel";

let edad = 25;

const pais = "El Salvador";
*/


//Ejercicio 01

//Crear cinco variables y mostrarlas en consola 

console.log("\n*** Ejercicio 01 ***");

const nombre = "Miguel";

const edad = 25;

const estudiante = true;

const ciudad = "San Salvador";

const promedio = 9.8;

console.log("\n" + nombre + "\n" + edad + "\n" + ciudad  + "\n" + promedio);

//Ejercicio 02

//Crear una variable e incrementar su valor 

console.log("\n*** Ejercicio 02 ***");

let puntos = 10;

puntos = puntos + 5;

console.log("\npuntos " + puntos );

//Ejercicio 03
// utilizar typeof

console.log("\n*** Ejercicio 03 ***");

console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof estudiante)
 
//Ejercicio 04
/**
 * Mostrar exactamente esto:
 * Nombre: Miguel
 * Edad: 25
 * Estudiante: true
 * Ciudad: San Salvador
 * 
 * usando template literals:
 * 
 * console.log(`Nombre: ${nombre}`);
 */

console.log("\n*** Ejercicio 04 ***");

console.log(`Nombre: ${nombre}`);
console.log(`Edad: ${edad}`);
console.log(`Estudiante: ${estudiante}`);
console.log(`Ciudad: ${ciudad}`);
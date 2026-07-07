// Ejercicio  01

/** Crear una funcion que calcule el area de un rectangulo
 * debe recibir:
 *  - ancho
 *  - alto 
 * 
 * Debe devolcer el area
 * 
 * Resultado esperado Area: 80
 */

let a = 10;
let b = 8;

const areaRectangulo = (altura,base) => a * b;

console.log(` El area del rectangulo con altura ${a} y base ${b} es de ${areaRectangulo(a,b)}`);

//Ejercicio 02 

/**
 * crear una funcion que determine si un numero es par 
 * 
 * Ejemplo 
 * esPar(8)
 * 
 * Debe devolver
 *  true
 * 
 */
let number = 8;
const esPar = ( num ) => num % 2 == 0 ;

console.log(esPar(number)); //Muestra segun como lo pide el enuncuadio

console.log(` el numero ${number} ${esPar(number)? "es par " : "no es par"} `); // Lo muestra un poco mas amigable para el usuario

//Ejercicio 04

/**
 * Crear una funcion de fleacha que convierta grados Celsius a Fahrenheit
 * 
 * Formula 
 * F = (C × 9/5) + 32
 * 
 * Ejemplo 
 * 
 * 25 C => 77 F
 */

let gradosC = 25;

const gradosF = (gradosC) => (gradosC * 9/5) + 32;

console.log(`${gradosF(gradosC)}°F`);

//Ejercicio 05

/**
 * Crear una calculadora 
 * debe tener funciones
 * - sumar()
 * - restar()
 * - multiplicar()
 * - dividir()
 */

const  sumar = (a,b) => a + b;
const  restar = (a,b) => a - b;
const  multiplicar = (a,b) => a * b;
const  dividir = (a,b) => a / b;

console.log(sumar(5, 6));

console.log(restar(20, 8));

console.log(multiplicar(3, 5));

console.log(dividir(20, 4));

// Mini calculadora 
/** este ejercicio consta de una mini calculadora de propinas 
 * haciendo uso de una arrow function
 * 
*/

const calcularTotal = (cuenta, porcentaje) => cuenta + ((cuenta * porcentaje) / 100)

console.log(calcularTotal(80, 15));
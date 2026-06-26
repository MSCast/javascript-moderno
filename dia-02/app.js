//TIPOS DE DATOS

/**
 * Ejercicios del dia 02
 * 
 * ejercicio 01: tipos de datos
 * crea estas variables
 */

const nombre = "Miguel";
const edad = 25;
const estudiante = true;
const ciudad = "San Salvador";
const saldo = null;

/**
 * Imprimimos su tipo
 */

console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof estudiante);
console.log(typeof ciudad);
console.log(typeof saldo);

/**
 * Ejercicio 02: Conversiones
 * convierte a numero y suma 10
 */

const numeroTexto = "50";

console.log(Number(numeroTexto)+10);

/**
 * Ejercicio 03: Operadores
 * Calcula:
 * Suma
 * Resta
 * Multiplicacion
 * division
 * modulo
 */

const a = 15;
const b = 4;

//SUMA

console.log(a + b);

//RESTA

console.log(a - b);

//MULTIPLICACION;

console.log(a * b);

//DIVISION

console.log(a / b);

//MODULO

console.log(a % b);

/**
 * Ejercicio 04 
 * evalua los siguientes console.log y explica en comentarios que es lo que sucede 
 */

console.log(10 == "10");
/**
 * Compara el valor y devuelve true debido a que javascript no compara el tipo de dato, solo
 * compara el valor, ya que al ser un lenguaje de tipado dinamico, intenta convertir los valores al mismo tipo
 * antes de compararlos 
 */

console.log(10 === "10");
/**
 * Compara de manera estricta al contrario de cuando se usa == en este caso al ser === es una comparacion estricta
 * esto quiere decir que compara tanto el valor como el tipo de dato y al ser de diferente tipo de dato
 * nos devuelve false ya que como se dijo son de diferente tipo uno es un valor numerico y el otro es un string
 */

console.log(Boolean(""));
/**
 * Compara si es un string no esta vacio lo cual en este caso devuelve como valor false
 * ya que entre los "" es un string vacio 
 */
console.log(Boolean("0"));
/**
 * convierte el valor a su equivalente en booleano en javascript todos los string son trthy 
 * lo cual hace que se consideren true a menos que esten vacios, en este caso el 0 es considerado un string
 * entonces se devuelve un valor true ya que el 0 se toma como un caracter
 */
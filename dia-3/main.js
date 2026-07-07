//Ejercicio 01 mayor o menos 
/**
 * mostrar si es mayor o menor de edad
 */
const edad = 17;

if (edad >= 18){
    console.log("Es mayor de edad");
}else{
    console.log("es menor de edad")
}

//Ejercicio 02 acceso a clun

/** 
 * Reglas para ingresar al club tiene que ser mayor de edad y tener un ticket de acceso
 */

const edadClub = 18;
const tieneTicket = true;

if ( edadClub >= 18 && tieneTicket == true){
    console.log("Puede ingresar al club");
}else if( edadClub >= 18 && tieneTicket == false){
    console.log("no Puede ingresar al club necesita un ticket");
}else{
    console.log("No puede ingresar al club");
}

//Ejercicio 03 Nota escolar 

/**
 * Condiciones 
 * 90+ = A
 * 70 - 89 = B
 * 50 - 69 = C
 * <50 = F
 */

const nota = 65;

if (nota >= 90 ){
    console.log (" Su nota es A");
} else if ( nota>= 70 ){
    console.log (" su nota es B " );
}else if ( nota>= 50 ){
    console.log (" su nota es C " );
}else{
    console.log (" su nota es F " );
}

//Ejercicio 04 Simulacion de cajero

/**
 * simular un cajero el cual solo deja retirar si hay suficiente saldo
 */

const saldo = 1000;
const retiro = 300;

if ( retiro <= saldo){
    console.log("Retiro procesado");
}else if( retiro >= saldo){
    console.log("El retiro no puede ser procesado");
}
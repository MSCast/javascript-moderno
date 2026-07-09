/**
 * Desestructuracion (Destructuring)
 * Muy usadad en React y Node.js
 * 
 */

//Sin destructuring

const persona = {
    nombre: "Miguel",
    edad: 25
};

console.log(persona.nombre);

console.log(persona.edad);

//con destructuring
const persona0 ={
    nombre: "Jose",
    edad: 24
};

const {nombre, edad} = persona0;

console.log(nombre);
console.log(edad);

//Renombrar Variables

const persona2 = {
    nombre : "Miguel"
}

const { nombre: miNombre} = persona2;

console.log(miNombre)


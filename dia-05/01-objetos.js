/** Que es un objeto, es una coleccion de datos relacionados */

//ejemplo

const persona ={
    nombre: "Miguel",
    edad: 26,
    profesion: "Ingeniero"
};

console.log(persona);

/**
 * Propiedades
 * cada dato dentro del objeto se llama propiedad
 */

const laptop ={
    marca: "Lenovo",
    modelo: "ThinkPad",
    ram: 16,
    ssd: 512
}

/**
 * Las propiedades son
 * - marca
 * - modelo
 * - ram
 * - ssd
 */

//Formas de mostrar solo una propiedad del objeto

console.log(laptop.marca);

console.log(laptop["marca"]);

//Modificar propiedades

persona.edad = 28;

console.log(persona);

//Agregar propiedades

persona.pais = "El Salvador";

console.log(persona);

//Eliminar propiedades

delete persona.edad;

console.log(persona);


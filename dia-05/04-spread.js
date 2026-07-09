/**
 * Spread operator()
 */

const persona ={
    nombre: "Miguel",
    edad: 24
};

const empleado = {
    ... persona,

    puesto: "Developer"
};

console.log(empleado);

/**
 * Object.freeze()
 * 
 * impide modificar el objeto
 */

Object.freeze(persona);

persona.nombre = "Juan";

console.log(persona);

/**
 * Object.seal()
 * permite modificar valores existentes, pero no agregar ni eliminar propiedades
 */

const persona1 ={
    nombre: "Miguel",
    edad: 24
};

Object.seal(persona1);

persona1.nombre = "juan";

console.log(persona1);


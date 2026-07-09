/**
 * Metodos
 * los objetos tambien pueden guardar funciones
 */

const persona = {

    nombre: "Miguel",

    saludar(){

        console.log("Hola");
    }
};

persona.saludar();

/**Usando this
 * 
 * this representa al objeto actual
 */

const persona0 ={
    nombre: "Miguel",
    saludar(){
        console.log(`Hola soy ${this.nombre}`);
    }
};

persona0.saludar();

/**
 * Obeject.keys()
 * Obtiene todas la propiedades
 * 
 */

console.log(Object.keys(persona));

//Object.values()

console.log(Object.values(persona));

//Objerct.entries()
//Devuelve pares clave-valor.

console.log(Object.entries(persona));

//Recorrer un objeto 
const persona1 = {
    nombre: "miguel",
    edad: 26,
    pais: "El Salvador"
};

for (const propiedad in persona1){
    console.log(propiedad)
}

// Tambien se puede acceder al valor 

for(const propiedad in persona1){
    console.log(`${propiedad}:${persona1[propiedad]}`);
}


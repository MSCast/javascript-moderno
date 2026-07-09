/**
 * Ejercicio 1
 * crear un objeto llamado libro con 
 * -titulo
 * -autor
 * -paginas
 * - disponible
 * Despues imprime todas las propiedades
 *
 */

const libro ={
    titulo : "Dracula",
    auto: "Bram Stoker",
    pagina: 465,
    disponible : true
};
// FORMA BASICA
console.log(libro);


//FORMA MAS DECENTE
for(const propiedad in libro){
    if (propiedad === "disponible"){
        const estado = libro[propiedad] ? "Disponible" : "No Disponible";
        console.log(`${propiedad}: ${estado}`);
    }else{
        console.log(`${propiedad}: ${libro[propiedad]}`)
    }
}

/**
 * Ejercicio 02
 * crear un objeto auto
 * 
 * debe tener:
 * -marca
 * -modelo
 * -año
 */

const auto ={
    marca: "Honda",
    modelo: "Civic",
    year: 1988
}
for(const propiedad in auto ){
    console.log(`${propiedad}:${auto[propiedad]}`)
}

// cambiamos marca
auto.marca = "Toyota";

for(const propiedad in auto ){
    console.log(`${propiedad}:${auto[propiedad]}`)
}

//agregamos color 

auto.color = "Rojo";
for(const propiedad in auto ){
    console.log(`${propiedad}:${auto[propiedad]}`)
}

// eliminamos el año

delete auto.year;
for(const propiedad in auto ){
    console.log(`${propiedad}:${auto[propiedad]}`)
}

/**
 * 
 * Ejercicio 3
 * 
 * crear un objeto estudiante 
 * debe tener un metodo llamado presentarse()
 * 
 * debe imprimir 
 * 
 * hola, soy miguel y estudio ingenieria
 */

const estudiante = {
    nombre : "Miguel",
    carrera : "Ingenieria",

    presentarse(){
        console.log(`Hola soy ${this.nombre} y estudio ${this.carrera}`);
    }
};

estudiante.presentarse()

/**
 * 
 * Ejercicio 4
 * usa destructuring
 * 
 */

const computadora = {
    marca : "Lenovo",
    procesador : "Intel i5",
    ram : 16
}

//Extrae las tres propiedades

const {marca, procesador, ram} = computadora;

console.log(marca);
console.log(procesador);
console.log(ram);

/**
 * Ejercicio 05
 * 
 * Recorre un objeto 
 */

const producto = {
    nombre: "Mouse",
    precio: 25,
    stock: 40
};

for(const detalle in producto){
    console.log(`${detalle} : ${producto[detalle]}`)
}
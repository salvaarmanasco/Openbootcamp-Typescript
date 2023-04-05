//-------------------------------------------Clase 1-----------------------------------------------------------
console.log("hola mundo ts");
console.log("hola mundo ts2");
console.log("hola mundo ts3");
//-------------------------------------------Clase 2-----------------------------------------------------------

//Declaracion de variables
var nombre = "Martin";
console.log("Hola, " + nombre);
console.log("Hola, " + nombre + "que tal? ");
console.log(`Como han ido las vacaciones ${nombre} ?`);

let email = "martin@imaginagroup.com"; // variable de ambito local
console.log(`El email de ${nombre} es ${email}`);

const PI: number = 3.1416;

var apellidos = "San Jose";
// apellidos = 3; error de tipo

var apellidos2: any = "San Jose"; // hace que la variable pueda cambiar de tipo
apellidos2 = 3;

var error: boolean = false; // redundante
var error2: boolean; // declaramos para no tener inconvenientes a futuro

// Instanciacion multiple

let a: string, b: boolean, c: number; // 3 variables sin valor inicial
a = "Typescript";
b = true;
c = 8.9;

//Types: number, boolean,  string, null, undefined, void

// Tipos mas complejos
let listaTareas: string[] = ["tarea 1", "tarea 2"];

// combinacion de tipos
let valores: (string | number | boolean)[] = [false, "Hola", true, 56];

// Enumerados

enum Estados {
  "Completado",
  "Incompleto",
  "Pendiente",
}

let estadoTarea: Estados = Estados.Completado;

enum PuestoCarrera {
  "Primero" = 1,
  "Segundo",
  "Tercero",
}

let puestoMaraton: PuestoCarrera = PuestoCarrera.Segundo;

// Interfaces

interface Tarea {
  nombre: string;
  estado: Estados;
  urgencia: number;
}

// Crear variables que sigan a la interfaz

let tarea1: Tarea = {
  nombre: "Salva",
  estado: Estados.Pendiente,
  urgencia: 10,
};

// Crear tipos de TypeScript

type Producto = {
  precio: number;
  nombre: string;
};

let coche: Producto = {
  nombre: "Ferrari",
  precio: 100000,
};

// Condicionales

// if - else
if (error) {
  console.log("Hay un error");
} else {
  console.log("No hay un error");
}

// if - else if - else
if (coche.precio < 50000) {
  console.log("Es barato");
} else if (coche.precio < 10000) {
  console.log("Es caro");
} else {
  console.log("Es super caro");
}

// Switch

switch (tarea1.estado) {
  case Estados.Completado:
    console.log("Tarea completada");
    break;
  case Estados.Incompleto:
    console.log("Tarea incompleta");
    break;
  case Estados.Pendiente:
    console.log("Pendiente");
    break;
  default:
    break;
}

// Bucles
let listaTareasNew: Tarea[] = [
  {
    nombre: "Tarea 1",
    estado: Estados.Completado,
    urgencia: 10,
  },
  {
    nombre: "Tarea 2",
    estado: Estados.Incompleto,
    urgencia: 5,
  },
  {
    nombre: "Tarea 3",
    estado: Estados.Pendiente,
    urgencia: 1,
  },
];

listaTareasNew.forEach((tarea: Tarea, index: number) => {
  console.log(`${index} - ${tarea.nombre}`);
});

while (tarea1.estado !== Estados.Completado) {
  if (tarea1.urgencia == 20) {
    Estados.Completado;
    break;
  } else {
    tarea1.urgencia++;
  }
}

do {
  tarea1.urgencia++;
  tarea1.estado = Estados.Completado;
} while (tarea1.estado !== Estados.Completado);

// Asignacion de multiples variables

let miTarea = {
  titulo: "Mi Tarea",
  estados: Estados.Completado,
  urgencia: 10,
};

// Declaracion 1 a 1
let miTitulo = miTarea.titulo;
let miEstado = miTarea.estados;
let miUrgencia = miTarea.urgencia;

// **Factor Spread (Propagacion)

// En asignacion de variables
let { titulo, estados, urgencia } = miTarea;

// En listas
let listaCompraLunes: string[] = ["Leche", "Papas"];
let listaCompraMartes: string[] = [...listaCompraLunes, "Leche", "Papas"];
let listaCompraMiercoles: string[] = ["Carne", "Pescado"];
let listaCompraSemana: string[] = [
  ...listaCompraLunes,
  ...listaCompraMiercoles,
];

// En Objetos
let estadoApp = {
  usuario: "admin",
  session: 3,
  jwt: "Bearer10921",
};

// Cambiar valor por propagacion
let nuevoEstado = {
  ...estadoApp,
  session: 4,
};
//-----------------------------------------Clase consulta-------------------------------------------------------
let edad = 4;
let estudiante = {
  nombre: "martin",
  edad, // edad: edad
};
//--------------------------------------------Clase 3-----------------------------------------------------------

// Funciones
/**
 * Funcion que muestra un saludo por consola
 */
function saludar() {
  console.log("Hola mundo");
}
// Invocacion
saludar();

/**
 *
 * @param nombre Nombre de la persona
 */
function saludarPersona(nombre: string | number) {}

saludarPersona("Salvador");
saludarPersona(2);

/**
 *
 * @param nombre El nombre por defecto sera pepe
 */
function despedirPersona(nombre: string = "Pepe") {
  console.log(`Adios ${nombre}!`);
}

despedirPersona(); // Adios Pepe
despedirPersona("Salva"); // Adios Salva

/**
 *
 * @param nombre Nombre es opcional
 */
function despedidaOpcional(nombre?: string) {
  if (nombre) console.log(`Adios ${nombre}`);
  if (!nombre) console.log(`Adios!`);
}

despedidaOpcional(); // Adios!
despedidaOpcional("Salva"); // Adios Salva

function variosParams(nombre: string, apellidos?: string, edad: number = 18) {
  if (apellidos) console.log(`${nombre} ${apellidos} tiene ${edad} años`);
  if (!apellidos) console.log(`${nombre} tiene ${edad} años`);
}

variosParams("Salva", "Armanasco", 24); // Salva Armanasco tiene 24 años
variosParams("Salva", undefined, 24); // Salva tiene 24 años

function variosTipos(a: string | number) {
  typeof a === "number"
    ? console.log(`${a} es un numero`)
    : typeof a === "string"
    ? console.log(`${a} es un string`)
    : console.log(`${a} no es un numero ni un string`);
  throw Error("a no es un string ni un number");
}

variosTipos("Hola");
variosTipos(3);
// variosTipos(true); ERROR

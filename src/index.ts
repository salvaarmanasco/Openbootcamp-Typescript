import {
  deleteAllCookies,
  deleteCookie,
  getCookieValue,
  setCookie,
} from "cookies-utils";

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

/**
 *
 * @param nombre nombre de la persona
 * @param apellido apellido de la persona
 * @returns nombre completo
 */
function ejemploReturn(nombre: string, apellido: string): string | number {
  return `${nombre} ${apellido}`;
  // return 3;
}

const nombreCompleto = ejemploReturn("Salvador", "Armanasco");
console.log(nombreCompleto); // Salvador Armanasco
console.log(ejemploReturn("Salvador", "Armanasco")); // Salvador ARmanasco

/**
 *
 * @param nombres lista de nombres de texto
 */
function ejemploMultiParams(...nombres: string[]) {
  nombres.forEach((nombre) => {
    console.log(nombre);
  });
}

ejemploMultiParams("Salvador", "Pablo", "Daniel", "Joaquin");

const lista = ["Hola", "Chau"];
ejemploMultiParams(...lista);

function ejemploParamsLista(nombres: string[]) {
  nombres.forEach((nombre) => {
    console.log(nombre);
  });
}
ejemploParamsLista(lista);

type Empleado = {
  nombre: string;
  apellido: string;
  edad: number;
};

let empleadoLeo: Empleado = {
  nombre: "Leo",
  apellido: "Messi",
  edad: 34,
};

// Arrow functions

const mostrarEmpleado = (empleado: Empleado) =>
  `${empleado.nombre} tiene ${empleado.edad} años`;

const datosEmpleado = (empleado: Empleado): string => {
  if (empleado.edad > 70) {
    return `${empleado.nombre} esta en edad de jubilar`;
  } else {
    return `${empleado.nombre} esta NO en edad de jubilar`;
  }
};

mostrarEmpleado(empleadoLeo); // Leo tiene 34 años
datosEmpleado(empleadoLeo); // Leo no esta en edad de jubilar

const obtenerSalario = (empleado: Empleado, cobrar: Function) => {
  if (empleado.edad > 70) {
    return;
  } else {
    cobrar(); // callback a ejecutar
  }
};

const cobrarSalario = () => {
  console.log("Cobrar nomina");
};

obtenerSalario(empleadoLeo, cobrarSalario);

// Async functions

async function ejemploAsync(): Promise<string> {
  await console.log("Tarea a completar antes de continuar");
  console.log("Tarea completada");
  return "Completado";
}

ejemploAsync()
  .then((respuesta) => {
    console.log("Respuesta", respuesta);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => "Todo ha termiando");

// Generators

function* ejemploGenerator() {
  // yield -> para emitir valores
  let index = 0;
  while (index < 5) {
    //emitimos un valor incrementado
    yield index++;
  }
}

// Guardamos la funcion generadora en una variable

let generadora = ejemploGenerator();

// Accedemos a los valores emitidos

console.log(generadora.next().value); // 0
console.log(generadora.next().value); // 1
console.log(generadora.next().value); // 2
console.log(generadora.next().value); // 3...

// Worker

function* watcher(valor: number) {
  yield valor; // Emitimos el valor inicial

  yield* worker(valor); // Llamamos a las emisiones del worker

  yield valor + 4; // Emitimos valor final + 4
}

function* worker(valor: number) {
  yield valor + 1;
  yield valor + 2;
  yield valor + 3;
}

let generatorSaga = watcher(0);

console.log(generatorSaga.next().value); // 0 (lo ha hecho el watcher)
console.log(generatorSaga.next().value); // 1 (lo ha hecho el worker)
console.log(generatorSaga.next().value); // 2 (lo ha hecho el worker)
console.log(generatorSaga.next().value); // 3 (lo ha hecho el worker)
console.log(generatorSaga.next().value); // 4 (lo ha hecho el watcher)

// Sobrecarga de funciones

function mostrarError(error: string | number): void {
  console.log(`Ha habido un error: ${error}`);
}

//--------------------------------------------Clase 4-----------------------------------------------------------

// Persistencia de datos
// 1. LocalStorage -> Almacena los datos en el navegador (no se eliminan automaticamente)
// 2. SessionStorage -> Los datos persisten en la sesion del navegador
// 3. Cookies -> Tienen una fecha de caducidad y un ambito de URL

// LocalStorage y SessionStorage

// function saveLocalStorage(): void {
//   localStorage.set("nombre", "Martin");
// }

// function leer(): void {
//   let nombre = localStorage.get("nombre");
// }

// Cookies

const cookieOptions = {
  name: "usuario",
  value: "Salvador",
  maxAge: 10 * 60,
  expires: new Date(2099, 10, 1),
  path: "/",
};

setCookie(cookieOptions);

// Leer una cookie
let cookieLeida = getCookieValue("usuario");

// Eliminar
deleteCookie("usuario");

// Eliminar todas las cookies

deleteAllCookies();

// Clase Temporizador

class Temporizador {
  public terminar?: (tiempo: number) => void;

  public empezar(): void {
    setTimeout(() => {
      // Corroboro que la funcion terminar este disponible
      if (!this.terminar) return;

      // Cuando haya pasado el tiempo se ejecute la funcion terminar
      this.terminar(Date.now());
    }, 10000);
  }
}

const miTemporizador: Temporizador = new Temporizador();

// Definimos la funcion del callback a ejecutar

miTemporizador.terminar = (tiempo: number) => {
  console.log(`Hemos terminado la tarea en: ${tiempo}`);
};

// Lanzamos el temporizador
miTemporizador.empezar(); // Iniciara el timeOut y se ejecuta la funcion terminar()

// setInterval(() => console.log("Tic"), 1000); // Imprimir "tic" cada segundo por consola

// Eliminar la ejecucion de la funcion
delete miTemporizador.terminar;

document.getElementById("boton-login").addEventListener("click", () => {
  console.log(`Has hecho click en login`);
});

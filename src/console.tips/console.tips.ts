// Console Clear

console.clear(); // Borra la consola

// Console Assert

let a: number = 100;

console.assert(a === 100, "Mensaje error", `Otro mensaje ${a}`);

// Console Count

function contador(texto: string) {
  console.count(texto);
}

contador("Hola"); // 1
contador("Adios"); // 1
contador("Hola"); // 2

console.countReset(); // Reseteo del contador

// Console Info, Warn o Error

console.info("Texto informativo");
console.warn("Texto de aviso");
console.error("Texto de error");

// Console Trace

function uno() {
  dos();
}
function dos() {
  tres();
}
function tres() {
  console.trace(); // Trazar por donde se ha ido ejecutando para llegar a este punto
}

uno(); // Inicia el trace por consola

// Console DIR --> Mostrar valores de objetos

let coche = {
  nombre: "Audi",
  matricula: "ADC123",
  especificaciones: {
    motor: "v12",
    potencia: "300cv",
  },
};

console.dir(coche);

// Console Table --> Mostrar objetos o listas en tablas

console.table(coche);

// Console Time --> Contabilizar el tiempo de ejecucion

function espera() {
  for (let index = 0; index < 1000; index++) {
    //...
  }
}

console.time("Prueba"); // Inicia el cronometro
espera();
console.timeEnd("Prueba"); // Terminar y contabilizar el tiempo que ha pasado

// Console Group --> Hacer agrupaciones

console.group();
console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.groupEnd();

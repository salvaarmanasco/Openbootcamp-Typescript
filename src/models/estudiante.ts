import { Curso } from "./curso";

export class Estudiante {
  // Propiedades de clase
  nombre: string;
  apellidos?: string;
  cursos: Curso[];

  private ID: string = "12345";

  // Necesitamos un constructor
  constructor(nombre: string, cursos: Curso[], apellidos?: string | undefined) {
    // Inicializamos las propiedades
    this.nombre = nombre;
    if (apellidos) {
      this.apellidos = apellidos;
    }
    this.cursos = cursos;
  }

  get horasEstudiadas(): number {
    let horasEstudiadas = 0;
    this.cursos.forEach((curso: Curso) => {
      horasEstudiadas += curso.horas;
    });
    return horasEstudiadas;
  }

  get ID_Estudiante(): string {
    return this.ID_Estudiante;
  }
  set ID_Estudiante(id: string) {
    this.ID = id;
  }
}

export enum Niveles {
  "Informativa",
  "Urgente",
  "Bloqueante",
}

// Interface sirve para definir la firma y los puntos necesarios a implementar por quien la utilice
export interface ITarea {
  titulo: string;
  descripcion: string;
  completada: boolean;
  urgencia?: Niveles;
  resumen: () => string;
}

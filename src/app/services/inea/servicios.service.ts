import { Injectable } from "@angular/core";

export interface Buzon {
  codigo: string;
  nombre: string;
  fecha: string;
  estatus: string;
  contenido: string;
  autor: string;
  tipo: string;
  icono: string;
  respuesta: [];
}


@Injectable({
  providedIn: "root",
})
export class ServiciosService {
  constructor() {}
}

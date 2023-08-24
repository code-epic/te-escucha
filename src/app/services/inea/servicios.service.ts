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

//Alerta de documentos
export interface IWKFAlerta {
  documento?: number
  estado?: number
  estatus?: number
  activo?: number
  fecha?: string
  observacion?: string
  usuario?: string
}



@Injectable({
  providedIn: "root",
})
export class ServiciosService {

  public cmbAcciones = [
    { valor: "0", texto: "ACEPTAR", visible: "0" },
    { valor: "1", texto: "RECHAZAR", visible: "0" },
    { valor: "2", texto: "ELABORAR OFICIO DE OPINION", visible: "1" },
    { valor: "3", texto: "EN MANOS DEL DIRECTOR DEL DESPACHO", visible: "1" },
    {
      valor: "4",
      texto: "EN MANOS DEL SUB DIRECTOR DEL DESPACHO",
      visible: "1",
    },
    { valor: "5", texto: "ARCHIVAR", visible: "1" },
    { valor: "6", texto: "REDISTRIBUCION", visible: "1" },
    { valor: "7", texto: "SALIDA", visible: "2" },
  ];

  
  constructor() {}
}

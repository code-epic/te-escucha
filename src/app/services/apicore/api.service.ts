import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Swal, { SweetAlertIcon } from 'sweetalert2';



export interface IAPICore{
  id            ?:  string
  concurrencia  ?:  boolean
  ruta          ?:  string
  funcion       ?:  string
  parametros    ?:  string
  protocolo     ?:  string
  retorna       ?:  boolean
  migrar        ?:  false
  modulo        ?:  string
  relacional    ?:  boolean
  valores       ?:  any
  coleccion     ?:  string
  version       ?:  string
  http          ?:  number
  https         ?:  number
  consumidores  ?:  string
  puertohttp    ?:  number
  puertohttps   ?:  number
  driver        ?:  string
  query         ?:  string
  metodo        ?:  string
  tipo          ?:  string
  prioridad     ?:  string
  logs          ?:  boolean
  descripcion   ?:  string
  entorno       ?:  string
  cache         ?:  number
  estatus       ?:  boolean
  objeto        ?:  any
}


export interface ceDocumento {
  id ?: string //Id del documento
  nomb ?: string //Nombre
  obse ?: string
  tipo ?: string
  esta ?: string
  usua ?: string
}


export interface DocumentoAdjunto {
	archivo	 ?:	string //CodeEncrypt
	usuario	 ?:	string
	documento	 ?:	string
}


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  //Dirección Get para servicios en la página WEB
  URL =  environment.API

  hash = environment.Hash

  httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json',
   'Authorization': 'Bearer ' + sessionStorage.getItem('token') })
 };

 constructor( private http : HttpClient) {
   
 }

 
 //Ejecutar Api generales
 Ejecutar(xAPI : IAPICore) : Observable<any>{
   let url =  xAPI.objeto != undefined ? this.URL + "ccoleccion":this.URL + "crud" + this.hash
   return this.http.post<any>(url, xAPI, this.httpOptions);
 }


 /**
  * Ejecutar la coleccion
  * @param xObjeto Objeto Coleccion
  * @returns 
  */
 ExecColeccion(xObjeto): Observable<any> {
   var url = this.URL + "ccoleccion";
   console.log(url)
   return this.http.post<any>(url, xObjeto, this.httpOptions);
 }

  //EnviarArchivos generales
  EnviarArchivos(frm : FormData ) : Observable<any>{
   var httpOptions = {
     headers: new HttpHeaders({
       'Authorization': 'Bearer ' + sessionStorage.getItem('token') 
     })
   };
   return this.http.post<any>(this.URL + "subirarchivos", frm, httpOptions);
 }

 Dws( peticion : string ) : string {
   return this.URL + 'dw/' + peticion
 }


 Mensaje(msj: string, txt: string, icono: SweetAlertIcon, destino: string) : boolean {
   let respuesta = false
   Swal.fire({
     title: msj,
     text: txt,
     icon: icono,
     showCancelButton: false,
     confirmButtonColor: '#3085d6',
     cancelButtonColor: '#d33',
     confirmButtonText: 'Aceptar',
     cancelButtonText: 'No',
     allowEscapeKey: true,
   }).then((result) => {
     respuesta = result.isConfirmed
   })

   return respuesta
 }





}

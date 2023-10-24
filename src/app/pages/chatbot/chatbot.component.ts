import { utf8Encode } from "@angular/compiler/src/util";
import { Component, OnInit } from "@angular/core";
import { NgxUiLoaderService } from "ngx-ui-loader";
import { stringify } from "querystring";
import { ApiService, IAPICore } from "src/app/services/apicore/api.service";
import { UtilService } from "src/app/services/util/util.service";

interface Chat {
  id: number;
  pregunta: string;
  respuesta: string;
  descripcion: string;
  idioma: string;
  clase: string;
  tipo: string;
}

@Component({
  selector: "app-chatbot",
  templateUrl: "./chatbot.component.html",
  styleUrls: ["./chatbot.component.scss"],
})
export class ChatbotComponent implements OnInit {
  public xAPI: IAPICore = {
    funcion: "",
    parametros: "",
    valores: {},
  };

  public Chat: Chat = {
    id: 0,
    pregunta: "",
    respuesta: "",
    descripcion: "",
    idioma: "es",
    clase: "BASICO",
    tipo: "1",
  }

  public lstChat = [];

  public selectedIndex = 0;
  public active: boolean = false;

  constructor(
    private apiService: ApiService,
    private ngxService: NgxUiLoaderService,
    private util: UtilService
  ) {}

  ngOnInit(): void {
    this.Consultar();
  }

  tabActive(event) {
    this.selectedIndex = event.index
   
    if( event.index == 0 ){
      this.active = false
      this.limpiar()
     

    }


  }

  editar(e) {
    console.log(e)
    this.Chat = e;
    this.selectedIndex = 1
    this.active = true
  }

  limpiar () {
    this.Chat = {
      id: 0,
      pregunta: "",
      respuesta: "",
      descripcion: "",
      idioma: "es",
      clase: "BASICO",
      tipo: "1",
    }
  
  }

  Consultar() {
    this.ngxService.startLoader("load-chat");
    this.xAPI.funcion = "_SYS_CChatBot";
    this.xAPI.valores = {};
    this.xAPI.parametros = "";
    this.apiService.Ejecutar(this.xAPI).subscribe(
      (data) => {
        this.lstChat = data.Cuerpo;
        this.ngxService.stopLoader("load-chat");
      },
      (err) => {
        console.error(err);
      }
    );
  }

  Guardar() {
    this.ngxService.startLoader("load-chat");
    this.xAPI.funcion = "_SYS_IChatBot";
    if (this.active) {
      this.xAPI.funcion = "_SYS_AChatBot";
    }

    this.xAPI.valores = JSON.stringify(this.Chat);
    this.apiService.Ejecutar(this.xAPI).subscribe(
      (data) => {
        this.apiService.Mensaje(
          "Felicitaciones, Proceso exitoso",
          "Se ha registrado correctamente",
          "success",
          "ChatBot"
        );
        this.limpiar();
        this.ngxService.stopLoader("load-chat");
        this.Consultar()
        this.selectedIndex = 0
        this.active = false
      },
      (err) => {
        console.error(err);
      }
    );
  }



  getTipo(tipo): string {
    return tipo == 1 ? "ACTIVO" : "INACTIVO";
  }
}

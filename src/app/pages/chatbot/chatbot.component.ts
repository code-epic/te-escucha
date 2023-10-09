import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { stringify } from 'querystring';
import { ApiService, IAPICore } from 'src/app/services/apicore/api.service';
import { UtilService } from 'src/app/services/util/util.service';



interface Chat {
  pregunta : string
  respuesta : string
  descripcion: string
  idioma : string
  clase : string
  tipo: string
}


@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent implements OnInit {

  public xAPI : IAPICore = {
    funcion: '',
    parametros : '',
    valores: {}
  }

  public Chat : Chat = {
    pregunta: '',
    respuesta: '',
    descripcion: '',
    idioma: '1',
    clase: 'BASICO',
    tipo: '1'
  }

  public lstChat = []



  constructor(private apiService : ApiService,
    private ngxService: NgxUiLoaderService,
    private util: UtilService,) { }

  ngOnInit(): void {
  }


  Guardar(){
    this.ngxService.startLoader('load-chat')
    this.xAPI.funcion = '_SYS_IChatBot'
    this.xAPI.valores = JSON.stringify(this.Chat)
    this.apiService.Ejecutar(this.xAPI).subscribe(
      data => {
        this.apiService.Mensaje(
          "Felicitaciones, Proceso exitoso",
          "Se ha registrado correctamente",
          "success",
          "ChatBot"
        );
        this.ngxService.stopLoader('load-chat')
      },
      err => {
        console.error(err)
      }

    );
  }

}

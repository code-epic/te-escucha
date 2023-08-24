import { Component, OnInit } from '@angular/core';
import { ApiService, IAPICore } from 'src/app/services/apicore/api.service';
import { LoginService } from 'src/app/services/seguridad/login.service';

@Component({
  selector: 'app-tramites',
  templateUrl: './tramites.component.html',
  styleUrls: ['./tramites.component.scss']
})
export class TramitesComponent implements OnInit {
  public app : any
  public lstMenu = []
  public xAPI : IAPICore = {
    funcion : '',
    parametros : ''
  }

  lstEstados = []

  constructor(private loginService: LoginService, private apiService : ApiService) { }

  ngOnInit(): void {
    this.app = this.loginService.Usuario.Aplicacion[0]

    let menu = this.app.Rol.Menu

    this.lstMenu = menu.filter(e => {return e.nombre == "Tramites"})
    console.log(this.lstMenu)
    this.ConsultarEstados()
  }



  ConsultarEstados(){
    //WKF_CEstados
    this.xAPI.funcion = 'WKF_CEstados'
    this.xAPI.parametros = '%'
    this.xAPI.valores = ''
    this.apiService.Ejecutar(this.xAPI).subscribe(
      (data) => {
        console.log(data)
        this.lstEstados = data.Cuerpo.filter((e) => {
          return (e.esta == 1 && e.id != 3) || e.id == 1;
        });
        //this.apiService.Mensaje('Proceso exitoso se ha ' + data.msj, 'Felicitaciones', 'success', 'wkf')
      },
      (err) => {
        console.error(err)
      }
    )
  }
  
  getFuncion(id) : number {
    
    let pagina = 0
    this.lstEstados.map(e => {
      let ruta = '/' + e.nomb.toLowerCase()
      if( ruta == id) pagina = e.id
    })

    return pagina

  }

}

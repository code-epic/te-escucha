import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/seguridad/login.service';

@Component({
  selector: 'app-tramites',
  templateUrl: './tramites.component.html',
  styleUrls: ['./tramites.component.scss']
})
export class TramitesComponent implements OnInit {

  public app : any
  public lstMenu = []

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.app = this.loginService.Usuario.Aplicacion[0]

    let menu = this.app.Rol.Menu

    this.lstMenu = menu.filter(e => {return e.nombre == "Tramites"})
    console.log(this.lstMenu)
  }

}

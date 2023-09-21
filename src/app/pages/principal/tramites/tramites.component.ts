import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService, IAPICore } from "src/app/services/apicore/api.service";
import { LoginService } from "src/app/services/seguridad/login.service";

@Component({
  selector: "app-tramites",
  templateUrl: "./tramites.component.html",
  styleUrls: ["./tramites.component.scss"],
})
export class TramitesComponent implements OnInit {
  public app: any;
  public lstMenu = [];
  public xAPI: IAPICore = {
    funcion: "",
    parametros: "",
  };

  lstEstados = [];

  constructor(
    private router: Router,
    private loginService: LoginService,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.app = this.loginService.Usuario.Aplicacion[0];

    let menu = this.app.Rol.Menu;

    this.lstMenu = menu.filter((e) => {
      return e.nombre == "Tramites";
    });
    let items = window.sessionStorage.getItem("estados");
    if (items != undefined) {
      this.lstEstados = JSON.parse(items);
    } else {
      this.router.navigate(["/principal"]);
    }
  }

  getFuncion(id): number {
    let pagina = 0;
    this.lstEstados.map((e) => {
      let ruta = e.nomb.toLowerCase();
      let valor = id.slice(1)
      if ( ruta.indexOf(valor) == 0 ) {
        pagina = e.id
        return 
      }
    });

    return pagina;
  }
}

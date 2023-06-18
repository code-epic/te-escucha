import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { PageEvent } from "@angular/material/paginator";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Buzon } from "src/app/services/inea/servicios.service";
import { UtilService } from "src/app/services/util/util.service";

@Component({
  selector: "app-pilotaje",
  templateUrl: "./pilotaje.component.html",
  styleUrls: ["./pilotaje.component.scss"],
})
export class PilotajeComponent implements OnInit {
  public buzon: Buzon = {
    codigo: "000-1",
    nombre: "Solicitud de Reclamo",
    fecha: "23-07-1985",
    estatus: "Activo",
    contenido: "Todos los reclamos establecidos en el corto tiempo",
    autor: "gesaodin@gmail.com",
    tipo: "Reclamo",
    icono: "pilotajes",
    respuesta: [],
  };

  public lstAll: any = [];
  longitud = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 50, 100];
  public numCarpeta: string = "";
  public allComplete: boolean = false;
  public estilocheck = "none";
  public estiloclasificar = "none";
  public pageEvent: PageEvent;
  selected = new FormControl(0);

  
  constructor(
    private utilService: UtilService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.lstAll = [
      this.buzon,
      this.buzon,
      this.buzon,
      this.buzon,
      this.buzon
    ];
    console.log(this.lstAll);
  }

  updateAllComplete() {
    this.allComplete =
      this.lstAll != null && this.lstAll.every((t) => t.completed);
  }

  someComplete(): boolean {
    if (this.lstAll == null) {
      return false;
    }

    return (
      this.lstAll.filter((t) => t.completed).length > 0 && !this.allComplete
    );
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.lstAll == null) {
      return;
    }

    this.lstAll.forEach((t) => (t.completed = completed));
    if (completed == false) {
      this.estiloclasificar = "none";
    } else {
      this.estiloclasificar = "";
    }
  }

  pageChangeEvent(e) {
    this.pageSize = e.pageSize;
    this.recorrerElementos(e.pageIndex);
  }

  //recorrerElementos para paginar listados
  recorrerElementos(pagina: number) {
    let pag = this.pageSize * pagina;
    this.lstAll = this.lstAll.slice(pag, pag + this.pageSize);
  }

  open(content, id) {
    // this.numControl = id;
    //this.hashcontrol = btoa( "D" + this.numControl) //Cifrar documentos
    this.modalService.open(content, { centered: true });
  }
}

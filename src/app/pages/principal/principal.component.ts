import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts";
import { ApiService, IAPICore } from 'src/app/services/apicore/api.service';
import { LoginService } from 'src/app/services/seguridad/login.service';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  public xAPI : IAPICore = {
    funcion : '',
    parametros : ''
  }


  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;

  constructor(private loginService: LoginService, private apiService : ApiService) { }

  ngOnInit() {
    var chartOrders = document.getElementById('chart-orders');
    this.ConsultarEstados()

    parseOptions(Chart, chartOptions());

    var ordersChart = new Chart(chartOrders, {
      type: 'bar',
      options: chartExample2.options,
      data: chartExample2.data
    });


    var chartSales = document.getElementById('chart-sales');

      this.salesChart = new Chart(chartSales, {
  			type: 'line',
  			options: chartExample1.options,
  			data: chartExample1.data
  		});
    

  }

  ConsultarEstados(){
    this.xAPI.funcion = 'WKF_CEstados'
    this.xAPI.parametros = '%'
    this.xAPI.valores = ''
    this.apiService.Ejecutar(this.xAPI).subscribe(
      (data) => {
        const items = data.Cuerpo.filter((e) => {
          return (e.esta == 1) || e.id == 1;
        });
        window.sessionStorage.setItem('estados', JSON.stringify(items))
      },
      (err) => {
        console.error(err)
      }
    )
  }
  

}

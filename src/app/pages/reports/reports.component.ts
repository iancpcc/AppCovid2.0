import { Component, OnInit } from '@angular/core';
import { CiudadanosService } from '../../services/service.index';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor(private totales:CiudadanosService) { }
cargandoMeses=true;
cargandoSintomas=true;
cargandoCantones=true;
// cargandoMeses=true;
totalesMeses:any
listaSintomas=[]
listaCantones:any
  ngOnInit(): void {
    this.totales.obtenerTotalesPorMes()
    .subscribe(resp=>{
      this.totalesMeses=resp;
      this.cargandoMeses=false;
    });

    this.totales.obtenerTotalesSintoma()
    .subscribe(resp=>{
      this.listaSintomas=resp;
      this.cargandoSintomas=false;
      

    })
    this.totales.totalparroquias()
    .subscribe(cantones=>{
      this.listaCantones=cantones;
      this.cargandoCantones=false;
    })

    }

  }



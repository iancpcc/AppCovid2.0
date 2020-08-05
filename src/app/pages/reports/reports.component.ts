import { Component, OnInit } from '@angular/core';
import { CiudadanosService } from '../../services/service.index';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor(private totales:CiudadanosService) { }
cargando=true;
totalesMeses=[]
  ngOnInit(): void {
    this.totales.obtenerTotalesPorMes()
    .subscribe(resp=>{
      this.totalesMeses=resp;
      this.cargando=false;
    });

  }

}

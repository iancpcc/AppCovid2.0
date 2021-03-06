import { Component, OnInit } from '@angular/core';
import { CiudadanosService } from '../../services/ciudadanos/ciudadanos.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public totalUsuario:Number=0
  public totalRegistradosHoy:Number=0
  public TotalRegistradosMensual:Number=0
  cargandoCantones=true;
  listaCantones:any
  cargando=true;
  constructor(private totales:CiudadanosService) { }

  ngOnInit(): void {
    this.totales.obtenerTotales()
    .subscribe((res:any)=>{
      this.totalUsuario=res.TotalRegistros
      this.totalRegistradosHoy=res.RegistrosDia
      this.TotalRegistradosMensual=res.RegistrosMes
      this.cargando=false;
    })

    this.totales.totalparroquias()
    .subscribe(cantones=>{
      this.listaCantones=cantones;
      this.cargandoCantones=false;
    })

  }
}

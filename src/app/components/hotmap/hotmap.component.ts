import { Component, OnInit, Input, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { CiudadanosService } from '../../services/service.index';
 import * as L from 'leaflet';
import Swal from 'sweetalert2';
  
declare function _initMap()
@Component({
  selector: 'app-hotmap',
  templateUrl: './hotmap.component.html',
  styleUrls: ['./hotmap.component.css']
})
export class HotmapComponent implements OnInit,AfterViewInit,OnDestroy {
  public valores:any[]=[]

  @ViewChild('mapid') mapContainer;
  constructor(private coordenadas:CiudadanosService){

    
  }

  ngAfterViewInit(){
    this.cargarCalorLeaflet();
  }
  ngOnDestroy(){
  }

   ngOnInit(){
     _initMap();
     }

  
map
cargarCalorLeaflet(){

   this.map= L.map(this.mapContainer.nativeElement,
  
  ).setView([-1.2673361,-78.6276993], 17);

var tiles = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
// var tiles = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
}).addTo(this.map);

this.coordenadas.obtenerCoordenadasCiudadanos()
.subscribe(coors => {
  const heat = L.heatLayer(coors).addTo(this.map);
},error=>{
  Swal.fire({
    allowOutsideClick:false,
    title: 'Aviso',
    text: 'No se pudieron obtener datos del servidor',
    icon: 'info',
    // confirmButtonText: 'Cool'
  });
})


}
  
}

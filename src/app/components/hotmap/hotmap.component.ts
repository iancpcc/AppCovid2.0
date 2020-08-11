import { Component, OnInit, ViewChild } from '@angular/core';
import { CiudadanosService } from '../../services/service.index';

 import * as L from 'leaflet';
import Swal from 'sweetalert2';
  
declare function _initMap()
@Component({
  selector: 'app-hotmap',
  templateUrl: './hotmap.component.html',
  styleUrls: ['./hotmap.component.css']
})
export class HotmapComponent implements OnInit {
  public valores:any[]=[]

  @ViewChild('mapid') mapContainer;
  constructor(private coordenadas:CiudadanosService){
    
  }
//Declaracion de arrays

coord = [];
coord2 = [];

coord3 = [];
coord4 = [];

coord5 = [];
coord6 = [];

 
  meses:number[]=[]
  totales:number[]=[]
   ngOnInit(){
     _initMap();
     }
     options = {

      layers: [
        L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 18,
          attribution: ""
        })
      ],
      zoom: 12,
      center: L.latLng(-1.2571434, -78.6566384)
    };

  
map
cargarCalorLeaflet(map){
  var mapa0 = new L.LayerGroup();
    var mapa1 = new L.LayerGroup();
    var mapa2 = new L.LayerGroup();
    var mapa3 = new L.LayerGroup();

    this.coordenadas.obtenerCoordenadasCiudadanos()
    .subscribe(coors => {
      L.heatLayer(coors).addTo(mapa0);
    },error=>{
      Swal.fire({
        allowOutsideClick:false,
        title: 'Aviso',
        text: 'No se pudieron obtener datos del servidor',
        icon: 'info',
      });
    })


    this.coordenadas.obtenerCiudadanosMapacalor(0,3).subscribe(res => {

      for (let i = 0; i < res.length; i++) {
        let j = 0;
        this.coord = [];
        this.coord[j] = res[i].x;
        this.coord[j + 1] = res[i].y;
        
        this.coord2[i] = this.coord;

      }
       L.heatLayer(this.coord2).addTo(mapa1);

    })

    this.coordenadas.obtenerCiudadanosMapacalor(4,7).subscribe(res => {

      for (let i = 0; i < res.length; i++) {
        let j = 0;
        this.coord3 = [];
        this.coord[j] = res[i].x;
        this.coord[j + 1] = res[i].y;
       
        this.coord4[i] = this.coord;

      }
       L.heatLayer(this.coord4).addTo(mapa2);

    })
    this.coordenadas.obtenerCiudadanosMapacalor(8,11).subscribe(res => {

      for (let i = 0; i < res.length; i++) {
        let j = 0;
        this.coord5 = [];
        this.coord[j] = res[i].x;
        this.coord[j + 1] = res[i].y;
     
        this.coord6[i] = this.coord;

      }
       L.heatLayer(this.coord6).addTo(mapa3);

    })
    var capas_secundarias = {
      "Todos": mapa0, 
      "sintomas 1 a 3": mapa1,
      "sintomas 4 a 7": mapa2,
      "sintomas 8 a 11": mapa3
    };


  //  this.map= L.map(this.mapContainer.nativeElement  
  // ).setView([-1.2673361,-78.6276993], 17);

 
L.control.layers(capas_secundarias).addTo(this.map);




}

onMapReady(map) {
  var mapa0 = new L.LayerGroup();
  var mapa1 = new L.LayerGroup();
  var mapa2 = new L.LayerGroup();
  var mapa3 = new L.LayerGroup();




  // let newAddressPoints = addressPoints.map(function (p) { return [p[0], p[1]]; });

  // const corr=[];
  this.coordenadas.obtenerCoordenadasCiudadanos()
  .subscribe(coors => {
    L.heatLayer(coors).addTo(mapa0);
  },error=>{
    Swal.fire({
      allowOutsideClick:false,
      title: 'Aviso',
      text: 'No se pudieron obtener datos del servidor',
      icon: 'info',
    });
  })




  this.coordenadas.obtenerCiudadanosMapacalor(0,3).subscribe(res => {

    for (let i = 0; i < res.length; i++) {
      let j = 0;
      this.coord = [];
      this.coord[j] = res[i].x;
      this.coord[j + 1] = res[i].y;
      
      this.coord2[i] = this.coord;

    }
     L.heatLayer(this.coord2).addTo(mapa1);

  })

  this.coordenadas.obtenerCiudadanosMapacalor(4,7).subscribe(res => {

    for (let i = 0; i < res.length; i++) {
      let j = 0;
      this.coord3 = [];
      this.coord[j] = res[i].x;
      this.coord[j + 1] = res[i].y;
     
      this.coord4[i] = this.coord;

    }
     L.heatLayer(this.coord4).addTo(mapa2);

  })

  this.coordenadas.obtenerCiudadanosMapacalor(8,11).subscribe(res => {

    for (let i = 0; i < res.length; i++) {
      let j = 0;
      this.coord5 = [];
      this.coord[j] = res[i].x;
      this.coord[j + 1] = res[i].y;
   
      this.coord6[i] = this.coord;

    }
     L.heatLayer(this.coord6).addTo(mapa3);

  })

  var capa_base = {
    "Mapa vacio": mapa0
  };
  var capas_secundarias = {
    "Todos": mapa0,
    "sintomas 1 a 3": mapa1,
    "sintomas 4 a 7": mapa2,
    "sintomas 8 a 11": mapa3
  };

  L.control.layers(null, capas_secundarias).addTo(map);

}
  
}

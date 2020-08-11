import { Component, Input } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { CiudadanosService } from '../../services/ciudadanos/ciudadanos.service';

@Component({
  selector: 'app-spline',
  templateUrl: './spline.component.html',
  styleUrls: ['./spline.component.css']
})
export class SplineComponent {
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}]},
  };
  
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  Sintoma:string[]=[]
  totalcantidad:number[]=[]
  
  public barChartLabelsSintomas: Label[] ;
  public barChartData: ChartDataSets[] ;

  @Input() Sintomas
  constructor(private totales:CiudadanosService ) { }

  ngOnInit() {
    
   
      let i=0;
      this.Sintomas.forEach(element => {
        
        this.Sintoma[i]=element['Sintoma']
        this.totalcantidad[i]=element['Total']
        i++;
      });
      // this.barChartLabelsSintomas=this.Sintoma;
          this.barChartData= [
            
            { data: [ this.totalcantidad[0]], label: "Falta de Fiebre" },
            { data: [ this.totalcantidad[1]], label: "Fiebre de 38" },
            { data: [ this.totalcantidad[2]], label: "Tos Seca" },
            { data: [ this.totalcantidad[3]], label: "Contacto con Paciente +" },
            { data: [ this.totalcantidad[4]], label: "Mucosidad Nasal" },
            { data: [ this.totalcantidad[5]], label: "Dolor Muscular" },
            { data: [ this.totalcantidad[6]], label: "Dolor Gastrointestinal" },
            { data: [ this.totalcantidad[7]], label: "Conjuntivitis" },
            { data: [ this.totalcantidad[9]], label: "Perdida de Olfato" },
            { data: [ this.totalcantidad[9]], label: "Dolor de Pecho" },
            { data: [ this.totalcantidad[10]], label: "20 Dias" },
          
          ];
     
  }
  public barChartColors: Color[] = [
    { // Euro - Azul
      backgroundColor: ["#FF7360", "#F16D11", "#46B303", "#99C7A9 ", "#48F2F0 ",
                        "#127271 ", "#899EEC", "#0234F0 ", "#9902F0 ", "#926B93 ","#030203 "],
      borderColor: 'rgba(231, 231, 231)',
      hoverBackgroundColor: 'rgba(231, 231, 231)',
      hoverBorderColor: 'rgba(231, 231, 231)'
    },
    
  ];
};




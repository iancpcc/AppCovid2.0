import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, MultiDataSet, Color } from 'ng2-charts';
import { CiudadanosService } from '../../services/service.index';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit  {
  
 
constructor(private totales: CiudadanosService) { }

@Input() totalesPorMeses:any
 
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

ngOnInit(){
  
  const allNames= this.totalesPorMeses.map(res=> res.mes);
  const allValues=this.totalesPorMeses.map(res=> res.total);

        this.barChartLabelsSintomas=allNames;
        this.barChartData= [ {data:allValues,label:"Meses segun Contagios"}]
          // { data: allValues[1], label: "Junio" },
          // { data: allValues[2], label: "Julio" },


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
 


}

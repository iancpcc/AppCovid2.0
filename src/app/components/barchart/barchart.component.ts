import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';
import { CiudadanosService } from '../../services/service.index';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit  {
  
  public doughnutChartLabels: Label[]
  public doughnutChartData: MultiDataSet 
  public doughnutChartType: ChartType
  public totalUsuario: number
  public totalUsuariomeses: string[]
  public totalUsuarios: number[]
  public totalRegistradosHoy: Number = 0;
  public TotalRegistradosMensual: Number = 0;
  chartData: { data: number[]; label: string; }[];
  public pieChartLabels: Label[];
  public pieChartData: number[];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    // {
    //   backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'
    //                     ,'rgba(120,0,220,0.3)','rgba(79,0,130,0.3)','rgba(0,45,12,0.3)'],
    // },
  ];
constructor(private totales: CiudadanosService) { }

dynamicColors = function() {
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  return "rgb(" + r + "," + g + "," + b + ")";
};

public barChartOptions: ChartOptions = {
responsive: true,
};
meses:string[]=[]
total:number[]=[]
colores:string[]=[]
ngOnInit(){
  this.totales.obtenerTotalesPorMes()
  .subscribe(resp=>{
    
    let i=0;
    resp.forEach(element => {
      
      this.meses[i]=element['mes']
      this.total[i]=element['total']
      this.colores[i]=this.dynamicColors();
      i++;
    });

   
    this.pieChartLabels =this.meses ;
    this.pieChartData = this.total;
    this.pieChartColors = [{
        backgroundColor: this.colores
      }]


  });

}
public pieChartOptions: ChartOptions = {
  responsive: true,
  legend: {
    position: 'top',
  },
  plugins: {
    datalabels: {
      formatter: (value, ctx) => {
        const label = ctx.chart.data.labels[ctx.dataIndex];
        return label;
      },
    },
  }
};



}

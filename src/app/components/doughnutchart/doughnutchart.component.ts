import { Component, OnInit, Input } from '@angular/core';
import { Label } from 'ng2-charts';
import { ChartType, ChartDataSets } from 'chart.js';
import { Data } from '@angular/router';
@Component({
  selector: 'app-doughnutchart',
  templateUrl: './doughnutchart.component.html',
  styleUrls: ['./doughnutchart.component.css']
})
export class DoughnutchartComponent implements OnInit {

  public barChartLabels: Label[]
  public barChartType: ChartType;
  public barChartLegend = true;
  public barChartData: ChartDataSets[];
  public doughnutChartLabels: Label[]
  public doughnutChartData: Data[]
  public doughnutChartType: ChartType
  public doughnutLegend=true;

  @Input() Cantones
 constructor() { }

 ngOnInit() {
  console.log('cantones',this.Cantones);
  
  const allNames= this.Cantones['TotalesPorProvincia'].map(res=> res.canton);
  const allValues= this.Cantones['TotalesPorProvincia'].map(res=> res.total);
  this.barChartLabels=allNames;
      this.barChartData=allValues;
      this.barChartType='bar'

      //grafico dona
      this.doughnutChartLabels = allNames;
      this.doughnutChartData = allValues;
      this.doughnutChartType = "doughnut";


 }

}

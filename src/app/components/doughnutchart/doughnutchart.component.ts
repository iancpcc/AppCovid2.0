import { Component, OnInit } from '@angular/core';
import { MultiDataSet, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';
@Component({
  selector: 'app-doughnutchart',
  templateUrl: './doughnutchart.component.html',
  styleUrls: ['./doughnutchart.component.css']
})
export class DoughnutchartComponent implements OnInit {

 // Doughnut
 public doughnutChartLabels: Label[] = ['Mujeres', 'Hombres'];
 public doughnutChartData: MultiDataSet = [
   [100,50],
  
 ];
 public doughnutChartType: ChartType = 'doughnut';

 constructor() { }

 ngOnInit() {
 }

 // events
 public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
   console.log(event, active);
 }

 public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
   console.log(event, active);
 }
}

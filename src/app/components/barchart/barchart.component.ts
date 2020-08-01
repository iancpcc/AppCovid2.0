import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent  {

  constructor() { }
 public barChartOptions: ChartOptions = {
  responsive: true,
};
public barChartLabels: Label[] = ['Muertos','Enfermos','Recuperados'];
public barChartType: ChartType = 'bar';
public barChartLegend = true;
public barChartPlugins = [];

public barChartData: ChartDataSets[] = [
  { data: [800,0,0], label: 'Muertos' },
  { data: [0,1400,0], label: 'Enfermos' },
  { data: [0,0,500], label: 'Recuperados' },
  
];

}

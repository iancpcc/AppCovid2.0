import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotmapComponent } from './hotmap/hotmap.component';
import { MapboxComponent } from './mapbox/mapbox.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { SplineComponent } from './spline/spline.component';
//Graficos
import { ChartsModule } from 'ng2-charts';
import { BarchartComponent } from './barchart/barchart.component';
import { DoughnutchartComponent } from './doughnutchart/doughnutchart.component';
import { PiechartComponent } from './piechart/piechart.component';
import { TableComponent } from './table/table.component';

import {NgxPaginationModule} from 'ngx-pagination';

//Datepicker
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    HotmapComponent,
    MapboxComponent,
    SpinnerComponent,
    FormComponent,
    SplineComponent,
    BarchartComponent,
    DoughnutchartComponent,
    PiechartComponent,
    TableComponent
  ],
  exports:[
    HotmapComponent,
    MapboxComponent,
    SpinnerComponent,
    FormComponent,
    SplineComponent,
    BarchartComponent,
    DoughnutchartComponent,
    PiechartComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
    NgxPaginationModule,
    NgbModule
  ],
  providers:[ ]
})
export class ComponentesModule { }

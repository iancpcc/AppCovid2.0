import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotmapComponent } from './hotmap/hotmap.component';
import { MapboxComponent } from './mapbox/mapbox.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { SplineComponent } from './spline/spline.component';
//Graficos
import { ChartsModule } from 'ng2-charts';
import { BarchartComponent } from './barchart/barchart.component';
import { DoughnutchartComponent } from './doughnutchart/doughnutchart.component';
import { PiechartComponent } from './piechart/piechart.component';
@NgModule({
  declarations: [
    HotmapComponent,
    MapboxComponent,
    SpinnerComponent,
    FormComponent,
    SplineComponent,
    BarchartComponent,
    DoughnutchartComponent,
    PiechartComponent
  ],
  exports:[
    HotmapComponent,
    MapboxComponent,
    SpinnerComponent,
    FormComponent,
    SplineComponent,
    BarchartComponent,
    DoughnutchartComponent,
    PiechartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    ChartsModule
    
 
  ],
})
export class ComponentesModule { }

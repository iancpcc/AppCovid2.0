import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Empleado } from 'src/app/interfaces/empleado.model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }
@Input()persons:Empleado[]=[];
@Output() idperson = new EventEmitter<number>();
@Output() action = new EventEmitter<string>();

empleados:Empleado[]=[];
totalItems: number;
page: number;
previousPage: number;
showPagination: boolean;
pageActual:number =1;
dtTrigger=new Subject();
  ngOnInit(): void {
  	this.page =1;
	this.previousPage =1;
    this.dtTrigger.next();
  }

  emitirId(id:number,action:string){
    
    this.idperson.emit(id);
    this.action.emit(action);
  }
  

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Empleado } from 'src/app/interfaces/empleado.model';


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
  ngOnInit(): void {
  }

  emitirId(id:number,action:string){
    console.log('object',id);
    console.log('object',action);
    
    this.idperson.emit(id);
    this.action.emit(action);
  }
  

}

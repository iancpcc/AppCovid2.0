import { Component, OnInit, AfterViewInit } from '@angular/core';

declare function init_plugins()

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit,AfterViewInit {
  title = 'AppVinculacion';
  
  constructor() { }
  ngOnInit(): void {
    
  }
  ngAfterViewInit(){

  }
}

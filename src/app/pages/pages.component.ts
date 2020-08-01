import { Component, OnInit } from '@angular/core';
declare function init_plugins();
declare function init_widgets();
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: []
})
export class PagesComponent implements OnInit {
 
  constructor() { 
    init_widgets();
    init_plugins();
  }
 
  
  ngOnInit(): void {
    
    
  }

}

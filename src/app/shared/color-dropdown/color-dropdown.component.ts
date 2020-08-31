import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-dropdown',
  templateUrl: './color-dropdown.component.html',
  styleUrls: ['./color-dropdown.component.css']
})
export class ColorDropdownComponent implements OnInit {
  colors:string[] = ["blue", "purple","cyan","yellow","grey"];
  selectedColor = this.colors[0];
  
  constructor() { }

  ngOnInit() {
  }

}

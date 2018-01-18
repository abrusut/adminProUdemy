import { Component, OnInit } from '@angular/core';

// Esto esta en common.js y son metodos de jquerycl
declare function init_plugins();

@Component({
  selector: 'app-nopagefound',
  templateUrl: './nopagefound.component.html',
  styles: []
})
export class NopagefoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
  }

}

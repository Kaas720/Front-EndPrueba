import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aceptar-compra',
  templateUrl: './aceptar-compra.component.html',
  styleUrls: ['./aceptar-compra.component.css']
})
export class AceptarCompraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  regresarPaginaAnterior(){
    window. history. back();
  }
}

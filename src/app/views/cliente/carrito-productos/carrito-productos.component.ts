import { Component, OnInit } from '@angular/core';
import { CarritoProducto } from '../InterfazProducto/CarritoProducto';
import { CarritoServicio } from '../servicioCliente/agregarCarritoService';

@Component({
  selector: 'app-carrito-productos',
  templateUrl: './carrito-productos.component.html',
  styleUrls: ['./carrito-productos.component.css']
})
export class CarritoProductosComponent implements OnInit {

  constructor(private service: CarritoServicio) { }
  productos: CarritoProducto[] = []
  ngOnInit(): void {
    this.productos = this.service.producto;
  }
  regresarPaginaAnterior(){
    window. history. back();
  }
}

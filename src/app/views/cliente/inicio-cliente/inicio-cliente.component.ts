import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../ServiciosHttp/producto.service';
import { CarritoProducto } from '../InterfazProducto/CarritoProducto';
import { ProductoInterface } from '../InterfazProducto/ProductoInterfaz';
import { CarritoServicio } from '../servicioCliente/agregarCarritoService';

@Component({
  selector: 'app-inicio-cliente',
  templateUrl: './inicio-cliente.component.html',
  styleUrls: ['./inicio-cliente.component.css']
})
export class InicioClienteComponent implements OnInit {

  constructor(private service: CarritoServicio, private servicioProducto : ProductoService) { }
  productosCarritos : CarritoProducto[] = this.service.producto;
  producto: ProductoInterface[] = [];
  ngOnInit(): void {
   this.obtenerProductos();
  }
  agrgarAccarito(nombreProducto: string, precio: number, cantidad: number) {
    let person = new CarritoProducto(nombreProducto, precio, cantidad);
    this.service.agregar_producto_carrito(person);
  }
  obtenerProductos(){
    this.servicioProducto.getPersonajes().subscribe(data=>{
      this.producto = data;
    });
  }

}

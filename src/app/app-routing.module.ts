import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AceptarCompraComponent } from './views/cliente/aceptar-compra/aceptar-compra.component';
import { CarritoProductosComponent } from './views/cliente/carrito-productos/carrito-productos.component';
import { CuerpoComponent } from './views/cliente/cuerpo/cuerpo.component';
import { InicioClienteComponent } from './views/cliente/inicio-cliente/inicio-cliente.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'cliente', component: CuerpoComponent,
  children:[
    {path: '', component: InicioClienteComponent},
    {path: 'carrito', component: CarritoProductosComponent},
    {path: 'confirmar-entrega', component: AceptarCompraComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

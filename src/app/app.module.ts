import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {LoginComponent } from './views/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input'
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './views/cliente/header/header.component';
import { FooterComponent } from './views/cliente/footer/footer.component';
import { CuerpoComponent } from './views/cliente/cuerpo/cuerpo.component';
import { InicioClienteComponent } from './views/cliente/inicio-cliente/inicio-cliente.component';
import { CarritoProductosComponent } from './views/cliente/carrito-productos/carrito-productos.component';
import { CarritoServicio } from './views/cliente/servicioCliente/agregarCarritoService';
import { AceptarCompraComponent } from './views/cliente/aceptar-compra/aceptar-compra.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    CuerpoComponent,
    InicioClienteComponent,
    CarritoProductosComponent,
    AceptarCompraComponent
  ],
  imports: [
    MatFormFieldModule,
    AppRoutingModule,
    BrowserModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  providers: [CarritoServicio],
  bootstrap: [AppComponent]
})
export class AppModule { }

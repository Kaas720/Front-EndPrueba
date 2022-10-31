import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductoInterface } from '../cliente/InterfazProducto/ProductoInterfaz';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http : HttpClient) { }
  private urlhost: string = environment.point;
  private urlApi: string = 'api/Productoes';
  getPersonajes(): Observable<ProductoInterface[]>{
    return this.http.get<ProductoInterface[]>(this.urlhost + this.urlApi);
  }
}

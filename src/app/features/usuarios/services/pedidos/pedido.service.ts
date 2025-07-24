import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from '../../../../models/pedidos/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private apiUrl = "https://localhost:7249/api/clientes"
  
  constructor(private http: HttpClient){}

  getById(id: string): Observable<Pedido[]>{
    return this.http.get<Pedido[]>(`${this.apiUrl}/${id}`)
  }

  
}

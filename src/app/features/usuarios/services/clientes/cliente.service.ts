import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../../../../models/clientes/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  
  private apiUrl = "https://localhost:7249/api/clientes"
  
  constructor(private http: HttpClient){}

  create(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.apiUrl, cliente)
  }

  getAll(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.apiUrl)
  }

  getById(id: string): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.apiUrl}/${id}`)
  }

  update(cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(`${this.apiUrl}/${cliente.id}`, cliente)
  }

  delete(id: string): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }
}

import { Component, Inject } from '@angular/core';
import { ClienteService } from '../../services/clientes/cliente.service';
import { Cliente } from '../../../../models/clientes/cliente';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  imports: [CommonModule, RouterModule ],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss',
})
export class UsuariosComponent {
  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) {}

  ngOnInit() {
    this.getClientes();
  }

  getClientes() {
    this.clienteService.getAll().subscribe({
      next: (data: any) => (this.clientes = data.listaDeCliente, console.log(data), console.log(this.clientes)),
    });
  }

  deletarCliente(id: string) {
    if (confirm('Tem certeza que deseja deletar este cliente?')) {
      this.clienteService.delete(id).subscribe({
        next: () => {
          console.log('Cliente deletado com sucesso');
          
          this.getClientes();
        },
        error: (error) => {
          console.error('Erro ao deletar cliente:', error);
        }
      });
    }
  }
}

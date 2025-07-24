import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { ClienteService } from '../../services/clientes/cliente.service';
import { Cliente } from '../../../../models/clientes/cliente';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-detalhes-cliente',
  imports: [DatePipe],
  templateUrl: './detalhes-cliente.component.html',
  styleUrl: './detalhes-cliente.component.scss'
})
export class DetalhesClienteComponent {

  id: string | null = null;
  cliente?: Cliente;

  private route = inject(ActivatedRoute)
  private service = inject(ClienteService)

  ngOnInit(){
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id')
      if(this.id){
        this.service.getById(this.id).subscribe({
          next: (data: any) => (this.cliente = data.cliente, console.log(data))
        });
      }
      else{
        console.log("id nao encontrado")
      }
    })
  }
}

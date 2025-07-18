import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Cliente } from '../../../../models/clientes/cliente';
import { ClienteService } from '../../services/clientes/cliente.service';
import { cpfValidator } from '../../../../shared/validators/cpf.validator';
import { telefoneValidator } from '../../../../shared/validators/telefone.validator';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edicao-cliente',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './edicao-cliente.component.html',
  styleUrl: './edicao-cliente.component.scss',
})
export class EdicaoClienteComponent implements OnInit {
  id: string = '';
  cliente?: Cliente;
  clienteForm!: FormGroup;

  private route = inject(ActivatedRoute);
  private service = inject(ClienteService);
  private fb = inject(FormBuilder);

  ngOnInit() {
    this.initForm();
    this.getClientById();
  }

  private initForm(): void {
    this.clienteForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', [Validators.required, cpfValidator]],
      dataNascimento: ['', Validators.required],
      telefone: ['', telefoneValidator],
    });
  }

  updateCliente() {
    if (this.clienteForm.invalid) {
      this.clienteForm.markAllAsTouched(); 
      return;
    }
    const cpfLimpo = this.removerMascara(this.clienteForm.value.cpf);
    const telefoneLimpo = this.removerMascara(this.clienteForm.value.telefone);

    const clienteAtualizado: Cliente = {
      id: this.id,
      nome: this.clienteForm.value.nome,
      email: this.clienteForm.value.email,
      cpf: cpfLimpo,
      dataNascimento: this.clienteForm.value.dataNascimento,
      telefone: telefoneLimpo,
      pedidos: []
    };
    console.log(clienteAtualizado);
    this.service.update(clienteAtualizado).subscribe({
      next: (data: any) => console.log(clienteAtualizado),
    });
  }

  getClientById() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id') ?? '';
      if (this.id) {
        this.service.getById(this.id).subscribe({
          next: (data: any) => {
            this.cliente = data.cliente;

            this.clienteForm.patchValue(data.cliente);
          },
        });
      } else {
        console.log('id nao encontrado');
      }
    });
  }

  onCpfInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    let value = target.value.replace(/\D/g, '');

    if (value.length <= 11) {
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    }

    target.value = value;
    this.clienteForm.get('cpf')?.setValue(value);
  }

  onTelefoneInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    let value = target.value.replace(/\D/g, '');

    if (value.length <= 11) {
      if (value.length <= 10) {
        value = value.replace(/(\d{2})(\d)/, '($1) $2');
        value = value.replace(/(\d{4})(\d)/, '$1-$2');
      } else {
        value = value.replace(/(\d{2})(\d)/, '($1) $2');
        value = value.replace(/(\d{5})(\d)/, '$1-$2');
      }
    }

    target.value = value;
    this.clienteForm.get('telefone')?.setValue(value);
  }

  private removerMascara(valor: string): string {
    return valor.replace(/\D/g, '');
  }
}

import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ClienteService } from '../../services/clientes/cliente.service';
import { CommonModule } from '@angular/common';
import { cpfValidator } from '../../../../shared/validators/cpf.validator';
import { telefoneValidator } from '../../../../shared/validators/telefone.validator';

@Component({
  selector: 'app-criacao-cliente',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './criacao-cliente.component.html',
  styleUrl: './criacao-cliente.component.scss',
})
export class CriacaoClienteComponent {
  clienteForm: FormGroup;

  private fb = inject(FormBuilder);
  private clienteService = inject(ClienteService);

  constructor() {
    this.clienteForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', [Validators.required, cpfValidator]],
      dataNascimento: [''],
      telefone: ['', telefoneValidator],
      pedidos: [[]],
    });
  }

  createCliente() {
    if (this.clienteForm.invalid) {
      this.clienteForm.markAllAsTouched();
      alert('erro');
      return;
    }

    const cpfLimpo = this.removerMascara(this.clienteForm.value.cpf)
    const telefoneLimpo = this.removerMascara(this.clienteForm.value.telefone)

    const clienteData = {
      ...this.clienteForm.value,
      cpf: cpfLimpo,
      telefone: telefoneLimpo,
    };


    this.clienteService.create(clienteData).subscribe({
      next: (data: any) => console.log(data),
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

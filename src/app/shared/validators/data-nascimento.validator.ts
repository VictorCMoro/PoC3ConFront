import { AbstractControl, ValidationErrors } from '@angular/forms';

export function dataNascimentoValidator(control: AbstractControl): ValidationErrors | null {
  const dataNascimento = new Date(control.value);
  const hoje = new Date();

  const dataMinima = new Date(
    hoje.getFullYear() - 18,
    hoje.getMonth(),
    hoje.getDate()
  );

  if (dataNascimento > dataMinima) {
    return { menorDeIdade: true };
  }

  return null;
}

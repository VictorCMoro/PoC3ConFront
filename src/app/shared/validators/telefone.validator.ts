import { AbstractControl, ValidationErrors } from '@angular/forms';

export function telefoneValidator(control: AbstractControl): ValidationErrors | null {
  const telefone = control.value?.replace(/\D/g, '');

  if (!telefone) {
    return null; // Campo opcional
  }

  if (telefone.length !== 10 && telefone.length !== 11) {
    return { telefoneInvalido: true };
  }

  const ddd = parseInt(telefone.substring(0, 2));
  if (ddd < 11 || ddd > 99) {
    return { telefoneInvalido: true };
  }

  if (telefone.length === 11 && telefone.charAt(2) !== '9') {
    return { telefoneInvalido: true };
  }

  return null;
}

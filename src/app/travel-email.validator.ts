import { AbstractControl, ValidationErrors } from '@angular/forms';

export function travelEmailValidator(control: AbstractControl): ValidationErrors | null {
  const email: string = control.value;
  const isTravelEmail = email.endsWith('@travel.com');

  return isTravelEmail ? null : { travelEmail: true };
}

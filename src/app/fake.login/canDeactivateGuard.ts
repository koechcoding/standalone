import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

export interface FormComponent {
  canDeactivate: () => boolean | Observable<boolean>;
}

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<FormComponent> {
  canDeactivate(component: FormComponent): boolean | Observable<boolean> {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}

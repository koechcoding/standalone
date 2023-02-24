import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private state: string = '';

  constructor() { }

  setState(value: string) {
    this.state = value;
  }

  getState() {
    return this.state;
  }
}

import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
// import { travelEmailValidator } from '..travel-email.validator';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveformComponent implements OnInit {


  constructor() { }
    title:string = "REACTIVE FORM"
    form!:FormGroup




  ngOnInit(): void {

    this.form = new FormGroup({
      username: new FormControl('kelvin',Validators.required),
      email: new FormControl(null,[Validators.required, Validators.email]),
      destination: new FormControl(null,[Validators.required]),
      level: new FormControl(null,[Validators.required]),
      address: new FormGroup({
        country: new FormControl(null,[Validators.required]),
        region: new FormControl(null,[Validators.required]),
        county: new FormControl(null,[Validators.required])
      })
    })
  }

  formData: any = {};
  
  onSubmit() {
    console.log(this.formData);
  }

  addName(){
    const control = (new FormControl(null, Validators.required));
    ((this.formData.get('Name')) as FormArray).push(control)
  }

  getName(){
    return (this.formData.get('Name') as FormArray).controls
  }
  removeName(i : number){
    return (this.formData.get('Name') as FormArray).removeAt(i)
  }
  addEmail(){
    const control = new FormControl(null,Validators.required);
    (this.formData.get('Email') as FormArray).push(control);
  }

  getEmail(){
    return ((this.formData.get('Email')) as FormArray).controls
  }
  removeEmail(i: number){
    return ((this.formData.get('Email')) as FormArray).removeAt(i)
  }
}
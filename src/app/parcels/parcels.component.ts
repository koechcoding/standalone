import { Component } from '@angular/core';

@Component({
  selector: 'app-parcels',
  templateUrl: './parcels.component.html',
  styleUrls: ['./parcels.component.css']
})
export class ParcelsComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private formService: FormService) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, travelEmailValidator]],
      destination: ['', Validators.required]
    });
  }

  onSubmit() {
    this.formService.addParcel(this.myForm.value);
    this.myForm.reset();
  }
}

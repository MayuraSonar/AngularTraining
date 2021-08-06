import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  public form: FormGroup;
  public contactList: FormArray;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.form = this.fb.group({

      name: [null, Validators.required],
      organization: [null],
      contacts: this.fb.array([this.createContact()])
    });
    this.contactList = this.form.get('contacts') as FormArray;
  }
  createContact(): FormGroup {
    return this.fb.group({
      type: ['email', Validators.required],
      name: [null, Validators.required],
      value: [null, Validators.compose([Validators.required, Validators.email])],

    });
  }

  addContact() {
    this.contactList.push(this.createContact());
  }

  // get formGroup under contact formArray
  getContactFormGroup(index): FormGroup {

    const formGroup = this.contactList.controls[index] as FormGroup;
    return formGroup;

}

  removeContact(index) {
    this.contactList.removeAt(index);
  }

  get contactFormGroup()
  {
    return this.form.get('contacts') as FormArray;
  }

  ChangedFieldType(index) {
    let validators = null;
    if (this.getContactFormGroup(index).controls['type'].value === 'email') {
      validators = Validators.compose([Validators.required, Validators.email]);
    } else {

      validators = Validators.compose([Validators.required, Validators.maxLength(10)]);
    

    }
    
    this.getContactFormGroup(index).controls['value'].setValidators(validators);

    this.getContactFormGroup(index).controls['value'].updateValueAndValidity();
  }

  submit()
  {
    console.log(this.form.value);
  }

}

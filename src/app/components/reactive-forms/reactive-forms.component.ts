import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

import { PasswordValidator } from '../../shared/password.validator';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
})
export class ReactiveFormsComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  registrationForm: FormGroup;

  ngOnInit(): void {
    this.registrationForm = this.fb.group(
      {
        userName: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(15),
          ],
        ],
        email: ['', Validators.email],
        subscribe: [false],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
        address: this.fb.group({
          city: ['', Validators.required],
          state: ['', Validators.required],
          postalCode: [null, Validators.required],
        }),
      },
      { validators: PasswordValidator }
    );

    this.registrationForm
      .get('subscribe')
      .valueChanges.subscribe((checkedValue) => {
        const email = this.registrationForm.get('email');
        if (checkedValue) {
          email.setValidators([Validators.required, Validators.email]);
        } else {
          email.setValidators(Validators.email);
        }
        email.updateValueAndValidity();
      });
  }

  // registrationForm = new FormGroup({
  //   userName: new FormControl(),
  //   password: new FormControl(),
  //   confirmPassword: new FormControl(),
  //   address: new FormGroup({
  //     city: new FormControl(),
  //     state: new FormControl(),
  //     postalCode: new FormControl(),
  //   }),
  // });

  get userName() {
    return this.registrationForm.get('userName');
  }

  get confirmPassword() {
    return this.registrationForm.get('confirmPassword');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  loadData() {
    this.registrationForm.setValue({
      userName: 'mohamed',
      password: 'elhamra',
      email: 'mohamed@gmail.com',
      subscribe: true,
      confirmPassword: 'elhamra',
      address: {
        city: 'Temara',
        state: 'Rabat-Sale',
        postalCode: 12000,
      },
    });
  }

  onSubmit() {
    console.log(this.registrationForm.value);
  }
}

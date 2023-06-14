import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { Component, OnInit } from '@angular/core';
import ValidateForm from 'src/app/helpers/validateform';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  signUpForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {    
    this.signUpForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  hideShowPassword() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

  onSignUp() {
    if (this.signUpForm.valid) {
      console.log(this.signUpForm.value)
      // Send the obj to database
    } else {
      // Throw the error using toaster and with required fields
      ValidateForm.validateAllFormFields(this.signUpForm)
      console.log("Sign Up form is invalid")
    }
  }
}

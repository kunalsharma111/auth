import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";

import { NotificationService } from '../../services/notification.service';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  formSubmitted = false;
  helper = new JwtHelperService();
  showPassword: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private notifyService: NotificationService,
    private userService: UserService) { }

  ngOnInit() {
    this.createForm();
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  // Getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  createForm() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validator: this.MustMatch('password', 'confirmPassword')
    });
  }

  MustMatch(password1: string, password2: string) {
    return (formGroup: FormGroup) => {
      const pass = formGroup.controls[password1];
      const confirmPass = formGroup.controls[password2];

      if (confirmPass.errors && !confirmPass.errors.mustMatch) {
        return;
      }

      // set error on confirmPass if validation fails
      if (pass.value !== confirmPass.value) {
        confirmPass.setErrors({ mustMatch: true });
      } else {
        confirmPass.setErrors(null);
      }
    }
  }

  registerUser() {
    this.formSubmitted = true;

    if (this.registerForm.invalid) { return; }
    this.userService.userregister(this.registerForm.value).subscribe(
      (data: any) => {
        this.notifyService.showSuccess('register Successfully', "");
        this.router.navigate([`/`]);
      },
      (err: HttpErrorResponse) => {
        if (err.error.error) {
          this.notifyService.showError(err.error.error, "");
        }
        else if (err.error.msg) {
          this.notifyService.showError(err.error.msg, "");
        } else {
          this.notifyService.showError("Something went wrong", "");
        }
      }
    );
  }
}

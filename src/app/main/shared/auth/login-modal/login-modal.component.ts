import { Component, OnInit } from '@angular/core';
import { ModelService } from '../../services/model.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.css',
})
export class LoginModalComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public modelService: ModelService,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  getInputClasses(fieldName: string) {
    return {
      'w-full': true,
      'p-4': true,
      'text-lg': true,
      'bg-black': true,
      'border-2': true,
      'border-neutral-800': true,
      'rounded-md': true,
      'outline-none': true,
      'text-white': true,
      'focus:border-sky-500': true,
      'focus:border-red-500':
        this.loginForm.get(fieldName)?.invalid &&
        this.loginForm.get(fieldName)?.touched,
      'focus:border-2': true,
      transition: true,
      'disabled:bg-neutral-900': true,
      'disabled:opacity-70': true,
      'disabled:cursor-not-allowed': true,
    };
  }

  signUp(): void {
    this.modelService.isLoginModelOpen.set(false);
    this.modelService.isRegisterModelOpen.set(true);
  }

  handleSubmit(): void {
    const value = this.loginForm.value;
    this.authService
      .login(value.email, value.password)
      .then(() => this.modelService.isLoginModelOpen.set(false));
  }
}

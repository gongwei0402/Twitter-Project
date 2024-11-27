import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModelService } from '../../services/model.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrl: './register-modal.component.css',
})
export class RegisterModalComponent implements OnInit {
  registerForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    public modelService: ModelService,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      name: ['', Validators.required],
      username: ['', Validators.required],
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
        this.registerForm.get(fieldName)?.invalid &&
        this.registerForm.get(fieldName)?.touched,
      'focus:border-2': true,
      transition: true,
      'disabled:bg-neutral-900': true,
      'disabled:opacity-70': true,
      'disabled:cursor-not-allowed': true,
    };
  }

  login(): void {
    this.modelService.isLoginModelOpen.set(true);
    this.modelService.isRegisterModelOpen.set(false);
  }

  handleSubmit(): void {
    const value = this.registerForm.value;
    console.log(value);
    this.authService.register(value).then((res) => {
      this.modelService.isRegisterModelOpen.set(false);
    });
  }
}

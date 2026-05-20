import { Component, inject} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { ToastService } from '../../services/toast.service';
import { UserRequest } from '../../model/api/request/user-request';
import { UserResponse } from '../../model/api/response/user-response';
import { SessionService } from '../../services/session.service';
import { ToastContainer } from '../toast-container/toast-container';

@Component({
  selector: 'app-inicio-sesion',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule,ToastContainer],
  templateUrl: './inicio-sesion.html',
  styleUrl: './inicio-sesion.scss',
})
export class InicioSesion {
  location = inject(Location);
  router = inject(Router);
  authService = inject(AuthService);
  toastService = inject(ToastService)
  userRequest:UserRequest={} as UserRequest;
  userResponse:UserResponse={} as UserResponse;
  tokenService=inject(SessionService);

  form = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(2)]),
  });

  login() {
    if (this.form.invalid) return;

    const { email, password } = this.form.value;
    if (!email || !password) return;

    this.userRequest.email=email;
    this.userRequest.password=password;

    this.authService.login(this.userRequest).subscribe(
      (result:UserResponse)=>{
        this.userResponse=result;
        console.log(this.userResponse)
        localStorage.setItem('user_token', this.userResponse.token);
        console.log(this.tokenService.getInfoSession());
        this.toastService.show('Ingreso exitoso', 'success');
        console.log('Login successful');
        this.router.navigate(['/dashboard']);
      },
      (err:any)=>{
        console.log(err);
        console.log('Login failed');
        this.toastService.show('Ingreso fallido', 'danger');
      },
    );

  }

  onBack() {
    this.location.back();
  }

}

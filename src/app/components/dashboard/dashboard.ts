import { Component, OnInit, inject} from '@angular/core';
import {Router,RouterModule} from '@angular/router';
import { SessionService } from '../../services/session.service';
import { UserSesion } from '../../model/user-sesion';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-dashboard',
  imports: [RouterModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit{
  sessionService=inject(SessionService);
  authService=inject(AuthService);
  router=inject(Router);
  user:UserSesion|null=null;

  ngOnInit(): void {
    this.user=this.sessionService.getInfoSession();
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/inicio-sesion']);
  }


}

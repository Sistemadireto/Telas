import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../../scss/_login.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  change(val: string) {
    this.router.navigate([val]);
  }

  ngOnInit() { }

}

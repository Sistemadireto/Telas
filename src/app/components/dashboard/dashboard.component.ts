import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../../shared/services/app-data.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public appDataService: AppDataService,
    public router: Router
  ) { }

  ngOnInit() { }

  checkApp(val: string) {
    return this.appDataService.appData.appsOpened.indexOf(val) >= 0 ? true : false;
  }

  openApp(val: string) {
    this.appDataService.openApp(val);
    this.router.navigate(['dashboard', 'apps', val]);
  }

}

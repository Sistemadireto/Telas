import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LoginData } from 'src/app/shared/services/loginData';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userData: LoginData = JSON.parse(localStorage.getItem('userData'));

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() { }

  save() {
    const userData: LoginData = {
      phoneNumber: this.userData.phoneNumber,
      uid: this.userData.uid,
      email: this.userData.email,
      displayName: this.userData.displayName,
      photoURL: (this.userData.photoURL) ? this.userData.photoURL : '/assets/img/dummy-user.png',
      emailVerified: this.userData.emailVerified,
      document: (this.userData.document) ? this.userData.document : null,
      birthday: (this.userData.birthday) ? this.userData.birthday : null
    };

    this.authService.SetUserData(userData);
  }

  deleteAccount() {
    console.log(this.userData);
  }

}

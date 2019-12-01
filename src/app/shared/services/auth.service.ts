import { Injectable, NgZone } from '@angular/core';
import { LoginData } from './loginData';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;
  user: any;
  apps: any = {};

  constructor(
    public toast: ToastrService,
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone, // NgZone service to remove outside scope warning
  ) {
    /* Saving user data in localstorage when
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.afs.doc(`users/${user.uid}`).get().subscribe(a => {
          this.SetUserData(a.data());
        });

        this.afs.collection(`userData/${user.uid}/appList`, ref => ref).snapshotChanges().pipe(map(changes => {
          return changes.map(change => {
            const data = change.payload.doc.data(); const id = change.payload.doc.id; return { id, ...data };
          });
        })).subscribe(data => {
          this.apps = data;
        });


      } else {
        localStorage.setItem('userData', null);
        localStorage.setItem('appData', null);
        JSON.parse(localStorage.getItem('userData'));
      }
    });
  }
  // Sign in with email/password
  async SignIn(email: string, password: string) {
    try {
      await this.afAuth.auth.signInWithEmailAndPassword(email, password);
      this.ngZone.run(() => {
        this.router.navigate(['dashboard']);
      });
      // this.SetUserData(result.user);
    } catch (error) {
      this.toast.error('Verifique o e-mail/senha digitados.', 'Usuário não encontrado.');
    }
  }
  // Sign up with email/password
  async SignUp(email: string, password: string) {
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
      /* Call the SendVerificaitonMail() function when new user sign
      up and returns promise */
      this.SendVerificationMail();
      this.SetUserData(result.user);
    } catch (error) {
      this.toast.error(error.message, 'Desculpe.');
    }
  }
  // Send email verfificaiton when new user sign up
  async SendVerificationMail() {
    await this.afAuth.auth.currentUser.sendEmailVerification();
    this.router.navigate(['verify-email-address']);
  }
  // request password reset
  async ForgotPassword(email: string) {
    try {
      await this.afAuth.auth.sendPasswordResetEmail(email).then(() => {
        this.toast.success('Verifique sua caixa de entrada.', 'Nova senha solicitada.');
      }).catch((error) => {
        this.toast.error('Verifique o e-mail/senha digitados.', 'Usuário não encontrado.');
      });
    } catch (error) {
      this.toast.error('Verifique o e-mail/senha digitados.', 'Usuário não encontrado.');
    }
  }

  // Sign in with Google
  async GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  // Auth logic to run auth providers
  async AuthLogin(provider: auth.AuthProvider | auth.GoogleAuthProvider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['dashboard']);
        })
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error)
      })
  }

  /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: LoginData = {
      phoneNumber: user.phoneNumber,
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: (user.photoURL) ? user.photoURL : '/assets/img/dummy-user.png',
      emailVerified: user.emailVerified,
      document: (user.document) ? user.document : null,
      birthday: (user.birthday) ? user.birthday : null
    };
    localStorage.setItem('userData', JSON.stringify(userData));
    JSON.parse(localStorage.getItem('userData'));
    return userRef.set(userData, { merge: true });
  }

  // Sign out
  async SignOut() {
    return this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem('userData');
      localStorage.removeItem('appData');
      this.router.navigate(['login']);
    });
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('userData'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  updateCustomData(user: any, data: Partial<any>) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    return userRef.update(data);
  }

  SetCustomData(user: { uid: any; }) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    return userRef.set(Object.assign({}, this.userData), { merge: true });
  }
}

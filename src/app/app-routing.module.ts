import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecureInnerPagesGuard } from './shared/guard/secure-inner-pages.guard.ts.guard';
import { AuthGuard } from './shared/guard/auth.guard';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'register-user', component: RegisterComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'verify-email-address', component: VerifyEmailComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/:apps', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/:apps/:app', component: DashboardComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

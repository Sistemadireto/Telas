import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

import { ToastrModule } from 'ngx-toastr';
import {
  MatButtonModule, MatInputModule, MatCheckboxModule,
  MatIconModule, MatSortModule, MatMenuModule,
  MatFormFieldModule, MatSelectModule, MatDatepickerModule,
  MatNativeDateModule, MatListModule
} from '@angular/material';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AdDirective } from './ad.directive';

// Firebase services + environment module
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { SystemComponent } from './appData/current/system/system.component';
import { StartComponent } from './appData/current/system/start/start.component';
import { ProfileComponent } from './appData/current/system/profile/profile.component';
import { CustomizeComponent } from './appData/current/system/customize/customize.component';
import { NotifyComponent } from './appData/current/system/notify/notify.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { CalendarComponent } from './appData/current/calendar/calendar.component';
import { MediaPlayerComponent } from './appData/current/media-player/media-player.component';
import { DcbComponent } from './appData/current/dcb/dcb.component';
import { AtivuzComponent } from './appData/current/ativuz/ativuz.component';
import { OsComponent } from './appData/current/os/os.component';
import { ExpenseComponent } from './appData/current/expense/expense.component';

import { BlobModule } from 'angular-azure-blob-service';
import { AuthService } from './shared/services/auth.service';
import { ClientesComponent } from './appData/current/clientes/clientes.component';

import { IniciaisPipe } from './pipes/iniciais.pipe';
import { ColorPipe } from './pipes/color.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';

import { NgxMaskModule } from 'ngx-mask';
import { StockmanagerComponent } from './appData/current/stockmanager/stockmanager.component';
import { FotosComponent } from './appData/current/fotos/fotos.component';
import { GroupByPipe } from './pipes/group-by.pipe';

@NgModule({
  declarations: [
    AdDirective,
    AppComponent,
    SystemComponent,
    StartComponent,
    ProfileComponent,
    CustomizeComponent,
    NotifyComponent,
    ForgotPasswordComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    VerifyEmailComponent,
    CalendarComponent,
    MediaPlayerComponent,
    DcbComponent,
    AtivuzComponent,
    OsComponent,
    ExpenseComponent,
    ClientesComponent,

    IniciaisPipe,
    ColorPipe,
    SearchPipe,
    OrderByPipe,
    StockmanagerComponent,
    FotosComponent,
    GroupByPipe
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    BrowserModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,

    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    MatSortModule,
    MatCheckboxModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,

    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'Telas360'),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,

    NgxMaskModule.forRoot(),
    BlobModule.forRoot()
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    MatDatepickerModule,
    AuthService,
    { provide: FirestoreSettingsToken, useValue: {} }
  ],
  bootstrap: [
    AppComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  entryComponents: [
    StartComponent,
    ProfileComponent,
    CustomizeComponent,
    NotifyComponent
  ],
})
export class AppModule { }

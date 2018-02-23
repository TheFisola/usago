//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DashboardModule } from './dashboard/dashboard.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import {AngularFireModule} from  'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {ToastrModule, Toast} from 'ngx-toastr';



import {environment} from '../environments/environment'

//Component
import { AppComponent } from './app.component';
import { UserService } from './shared/services/user.service';
import { AuthService } from './shared/services/auth.service';
import { AuthGuardGuard } from './shared/services/auth-guard.guard';
import { AngularFireAuth } from 'angularfire2/auth';
import { RouterModule } from '@angular/router';










@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    HomeModule,
    SharedModule,
    RouterModule,
   ReactiveFormsModule,
   AngularFireModule.initializeApp(environment.firebaseConfig),
   AngularFireDatabaseModule,
   ToastrModule.forRoot()
  ],
  providers: [UserService, AuthService, AuthGuardGuard,AngularFireAuth],
  bootstrap: [
    AppComponent,
    
]
})
export class AppModule { }

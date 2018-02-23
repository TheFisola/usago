//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';


//Component
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';

import { UserService } from '../shared/services/user.service';
import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ErrorComponent } from '../shared/components/error/error.component';


export const homeRoutes:Routes=

[ 
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {

  path: '', component:HomeComponent, 
  
  children:
  [

 // {path:'', redirectTo:'/home/login', pathMatch:'full'},
  {path: 'signup', component:SignUpComponent},
  {path: 'login',  component:LoginComponent},

  ]

},
//{path: '**', component:ErrorComponent}
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(homeRoutes)
   

   
  ],
  exports:[RouterModule],
 
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    SignUpComponent, 
    LoginComponent, 
    HomeComponent
  ],
  providers: [UserService],
})
export class HomeModule { }

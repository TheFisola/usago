//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRouteModule } from './home-route/home-route.module';

//Component
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  imports: [
    CommonModule,
    HomeRouteModule,
   
  ],
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    SignUpComponent, 
    LoginComponent]
})
export class HomeModule { }

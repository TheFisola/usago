import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserViewProfileComponent } from './view-profile/view-profile.component';
import { UserUpdateProfileComponent } from './update-profile/update-profile.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UserViewProfileComponent, 
    UserUpdateProfileComponent, 
 
  ]
})
export class UserModule { }

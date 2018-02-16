import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ViewProfileComponent, UpdateProfileComponent]
})
export class UserModule { }

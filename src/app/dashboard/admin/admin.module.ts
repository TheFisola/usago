//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//Components
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { EditUserProfileComponent } from './edit-user-profile/edit-user-profile.component';

import { AdminSidebarComponent } from '../layout/admin-sidebar/admin-sidebar.component';




@NgModule({
  imports: [
    CommonModule
    
  ],
  declarations: [
    ViewProfileComponent, 
    UpdateProfileComponent, 
    ManageUsersComponent, 
    EditUserProfileComponent,
  
  ]
})
export class AdminModule { }

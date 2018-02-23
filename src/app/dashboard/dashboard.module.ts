import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { SharedModule} from '../shared/shared.module';


//Component
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AdminSidebarComponent } from './layout/admin-sidebar/admin-sidebar.component';
import { UserSidebarComponent } from './layout/user-sidebar/user-sidebar.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';

import { RouterModule, Routes } from '@angular/router';
import { ViewProfileComponent } from './admin/view-profile/view-profile.component';
import { UpdateProfileComponent } from './admin/update-profile/update-profile.component';
import { ManageUsersComponent } from './admin/manage-users/manage-users.component';
import { EditUserProfileComponent } from './admin/edit-user-profile/edit-user-profile.component';
import { UserViewProfileComponent } from './user/view-profile/view-profile.component';
import { UserUpdateProfileComponent } from './user/update-profile/update-profile.component';
import { UserService } from '../shared/services/user.service';
import { ErrorComponent } from '../shared/components/error/error.component';
import { AuthGuardGuard } from '../shared/services/auth-guard.guard';

export const dashboardRoutes: Routes =[
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {
    path: 'admin', canActivate: [AuthGuardGuard], component: AdminDashboardComponent,
    children: [
      {path: '', redirectTo: '/admin/view-profile', pathMatch: 'full'},
      { path: 'view-profile', component:ViewProfileComponent},
      {path: 'update-profile', component:UpdateProfileComponent},
      {path: 'manage-users', component:ManageUsersComponent},
      {path: 'edit-user-profile', component:EditUserProfileComponent}

    ]

  },

  {
    path: 'user', canActivate: [AuthGuardGuard],component: UserDashboardComponent,
    children: [
      {path: '', redirectTo: '/user/view-profile', pathMatch: 'full'},
      { path: 'view-profile', component:UserViewProfileComponent},
      {path: 'update-profile', component:UserUpdateProfileComponent}

    ]

  },
 // {path: '**', component:ErrorComponent, }
];

@NgModule({
  imports: [
    CommonModule,
    AdminModule,
    UserModule,
    SharedModule,
    RouterModule.forChild(dashboardRoutes)
    
   
  ],
  exports:[RouterModule],

  declarations: [
    HeaderComponent, 
    FooterComponent, 
    AdminSidebarComponent, 
    UserSidebarComponent, 
    AdminDashboardComponent,
    UserDashboardComponent

  ],
  providers: [UserService],

})
export class DashboardModule { }

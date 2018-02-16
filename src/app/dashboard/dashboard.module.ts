import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { SharedModule} from '../shared/shared.module';
import { DashboardRouteModule } from './dashboard-route/dashboard-route.module';

//Component
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AdminSidebarComponent } from './layout/admin-sidebar/admin-sidebar.component';
import { UserSidebarComponent } from './layout/user-sidebar/user-sidebar.component';


@NgModule({
  imports: [
    CommonModule,
    AdminModule,
    UserModule,
    SharedModule,
    
    DashboardRouteModule
  ],
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    AdminSidebarComponent, 
    UserSidebarComponent
  ]
})
export class DashboardModule { }

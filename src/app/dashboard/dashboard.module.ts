import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { SharedModule} from '../shared/shared.module';
import { DashboardRouteModule } from './dashboard-route/dashboard-route.module';

@NgModule({
  imports: [
    CommonModule,
    AdminModule,
    UserModule,
    SharedModule,
   
    DashboardRouteModule
  ],
  declarations: []
})
export class DashboardModule { }

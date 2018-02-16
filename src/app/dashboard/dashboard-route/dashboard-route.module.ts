import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
   // RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class DashboardRouteModule { }


/*
export const routes:Routes=[
  { path:'/',component:''}]

  */
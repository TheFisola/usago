//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//Services
import { UserService } from './services/user.service';
import { ErrorComponent } from './components/error/error.component';


@NgModule({
  imports: [
    CommonModule
  ],
  providers: [UserService],
  declarations: [ErrorComponent]
})
export class SharedModule { }

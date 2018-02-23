import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  })
export class SignUpComponent implements OnInit {

  constructor(private userService:UserService,
              private router: Router,
              private tostr: ToastrService
            ) { }
  

  ngOnInit() {
   
        this.resetForm();
    }
 

onSubmit(userForm:NgForm){
  //if (userForm.value.$key == null)
   this.userService.insertUser(userForm.value);
 /*
  else
  this.userService.updateProfile(userForm.value);
  */
 this.resetForm(userForm);
 
 this.tostr.success('Submitted Succcessfully', 'User Registered');
 //this.router.navigate(['/login']);
 

 
                
    //SUBMIT METHOD
  }

  resetForm(userForm?: NgForm) {
    if (userForm != null)
      userForm.reset();
    this.userService.selectedUser = {
      $key: null,
      firstName: '',
      lastName: '',
      email: '',
      phone_no: '',
      username: '',
      password:''

    }
  }



}


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: ''};

  constructor(private router: Router, private authService: AuthService) { }

  

  signInWithEmail() {

    this.authService.signInRegular(this.user.email, this.user.password)
      .then((res) => {
        console.log(res);
        if(this.user.email == "fifirulez@yahoo.com" && this.user.password == "dv61215sa")
        this.router.navigate(['admin']);
        else
        this.router.navigate(['user']);
      })
      .catch((err) => console.log('error: ' + err));
  }
  ngOnInit() {
  }

}

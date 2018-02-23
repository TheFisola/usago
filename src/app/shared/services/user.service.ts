import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@Injectable()
export class UserService {

  userList:AngularFireList<any>;
  
  selectedUser: User = new User();

  constructor(private firebase: AngularFireDatabase) { }

  getData(){

    this.userList = this.firebase.list('users');
    return this.userList;

  }
  


  insertUser( user:User ){

 

      this.userList = this.firebase.list('users');
      
  
  

    this.userList.push({
      
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phone_no: user.phone_no,
    username: user.username,
    password: user.password

    });

   

    }

    updateProfile(user:User){
      this.userList.update(user.$key,
        {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone_no: user.phone_no,
        username: user.username,
        password: user.password
        }
      );
    }

    deleteUser($key:string){
      this.userList.remove($key);
    }

  }



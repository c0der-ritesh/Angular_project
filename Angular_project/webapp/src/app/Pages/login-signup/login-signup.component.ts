import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'
import {MatSnackBar} from '@angular/material/snack-bar'
@Component({
  selector: 'app-login-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-signup.component.html',
  styleUrl: './login-signup.component.css'
})
export class LoginSignupComponent {
  activeForm : 'login'|'register' = 'register';
  registerObj:registerModel= new registerModel();
  loginObj:loginModel=new loginModel();
  constructor(private snackbar:MatSnackBar, private _router: Router){}
  toggleForm(form : 'login' | 'register')
  {
    this.activeForm = form;
  }
  registerForm()
  {
    const localusers= localStorage.getItem('users');
    if(localusers != null)
      {
        const users = JSON.parse(localusers);
        users.push(this.registerObj);
        localStorage.setItem('users',JSON.stringify(users)); 
      }
      else{
        const users =[];
        users.push(this.registerObj);
        localStorage.setItem('users',JSON.stringify(users))
      }
      this.snackbar.open('user register successfullly','close');
  }
  loginForm()
  {
    debugger;
    const localusers = localStorage.getItem('users');
    if(localusers!=null)
      {
        const users = JSON.parse(localusers);
        const isUserExist = users.find((user:registerModel)=>user.email == this.loginObj.email && user.password == this.loginObj.password);
        if(isUserExist!=undefined)
          {
            this.snackbar.open('Login Successful','close');
                localStorage.setItem('loggedUser',JSON.stringify(isUserExist));
            this._router.navigateByUrl('/dashboard');
          }
          else{
            this.snackbar.open('email or password is incorrect!')
          }
      }
  }

}
export class registerModel
{
  name:string;
  email:string;
  password:string;
  constructor(){
    this.name="";
    this.email="",
    this.password="";
  }

}
export class loginModel
{
  email:string;
  password:string;
  constructor()
  {
    this.email="",
    this.password="";
  }
}

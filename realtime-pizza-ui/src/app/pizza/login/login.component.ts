import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { RootService } from 'src/app/root.service';
import { PizzaService } from '../pizza-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private pizzaService:PizzaService,private _snackBar:MatSnackBar,private rootService:RootService,private router:Router) { }

  loginForm:FormGroup;
  ngOnInit() {
    this.loginForm= new FormGroup({
      userName:new FormControl(),
      password:new FormControl()
    })
  }

  onLogin(loginForm:FormGroup){
    const loginModel={
      username:loginForm.controls.userName.value,
      password:loginForm.controls.password.value,
    }
    this.pizzaService.login(loginModel).subscribe((data)=>{
      if(data['success']){
        this._snackBar.open('Login Successfull','Ok',{
          duration:2000
        })
      }

      this.rootService.isLoggedIn=true;
      this.router.navigate(['']);
    })

  }

}

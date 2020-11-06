import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { PizzaService } from '../pizza-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _snackBar:MatSnackBar,private pizzaService:PizzaService) { }

  regForm:FormGroup;
  ngOnInit() {
    this.regForm = new FormGroup({
      name:new FormControl(),
      userName:new FormControl(),
      password:new FormControl(),
      cpassword:new FormControl()
    })
  }

  onRegistration(regForm:FormGroup){
    if(regForm.controls.cpassword.value!==regForm.controls.password.value){
      this._snackBar.open('Password does not matched','Ok',{
        duration:2000
      })

      return;
    }

    const UserModel ={
      name:regForm.controls.name.value,
      userName:regForm.controls.userName.value,
      password:regForm.controls.password.value
    }
    this.pizzaService.signup(UserModel).subscribe(
      (data)=>{
        if(data['success']){
          this._snackBar.open('Registration Successfull','Ok',{
            duration:2000
          })
          this.regForm.reset()
        }
      }
    )
    
  }
}

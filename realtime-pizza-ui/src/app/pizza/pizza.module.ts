import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { PizzaRoutingModule } from './pizza.routing.module';
import { HomeComponent } from '../pizza/home/home.component';
import { MaterialModule } from '../material/material.module';
import { CartComponent } from '../pizza/cart/cart.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PizzaService } from './pizza-service';
import { CartResolver } from './cart/cart-resolver';



@NgModule({
  declarations: [LoginComponent, HomeComponent, CartComponent, RegisterComponent],
  imports: [
    CommonModule,
    PizzaRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    
  ],
  providers:[PizzaService,CartResolver]
})
export class PizzaModule { }

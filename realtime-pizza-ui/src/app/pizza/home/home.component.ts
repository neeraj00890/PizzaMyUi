import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { RootService } from 'src/app/root.service';
import { PizzaService } from '../pizza-service';
import { debounceTime, throttle, throttleTime } from 'rxjs/operators';
import { interval } from 'rxjs';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pizzaItems =[];
  count:number=0;
   flag:boolean=true;
   addToCartProdFunction;
  constructor(private pizzaService:PizzaService,private rootService:RootService,private _snackBar: MatSnackBar) { 

  }

  ngOnInit() {
    this.pizzaService.getPizza().subscribe((data)=>{
      this.rootService.cartCount=data['totalCartCount'];
      for(var x in data){
        console.log(typeof data[x])
        if(typeof data[x]=='object')
          this.pizzaItems.push(data[x]);
      }
     
      this.addToCartProdFunction= this.getThrottledVersion(this.makeAnApiCall.bind(this),20000);
     
    }
      
    )
  }

  getThrottledVersion(fn,time){
    let flag=true;
    return (...args)=>{
      if(flag){
        fn.apply(this,args);
        flag=false;
      }
      setTimeout(()=>{
        console.log('i m called');
       flag=true;
      },time)
    }

  }

  makeAnApiCall(pizza){
    this.count++
    console.log(this.count);
    this.pizzaService.updareCart(pizza)
    .subscribe(
      (data)=>{
        console.log(new Date().getTime())
        this.rootService.cartCount=+data['totalQty'];
        this._snackBar.open('Item added to the cart', 'Ok', {
          duration: 2000,
        });
      }
    )
  }

  onAddToCart(pizza){
   
    this.addToCartProdFunction(pizza);
  }

}

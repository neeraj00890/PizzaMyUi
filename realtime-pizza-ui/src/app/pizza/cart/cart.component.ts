import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RootService } from 'src/app/root.service';
import { PizzaService } from '../pizza-service';


export interface Cart {
  name: string;
  qty: string;
  price: number;
  type:string
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  displayedColumns: string[] = ['name', 'qty', 'price','type'];
  dataSource :Cart[] = [ ];
  totalAmount:string;
  emptyCart:boolean
  constructor(private pizzaService:PizzaService,public rootService:RootService,private activeRoute:ActivatedRoute) { }
 
 
   ngOnInit() {
    this.emptyCart=this.rootService.cartCount<=0;
 let data= this.activeRoute.snapshot.data['cartData'];
 if(data){
  this.totalAmount=data?data.totalPrice:'';
  for (let key in data['items']){
   let pizza =data['items'][key];
  
   this.dataSource.push(
     {
       name:pizza.item.name,
       qty:pizza.qty,
       price:+pizza.item.price,
       type:pizza.item.size
     }
   )
 
 
 
  
 
 }
 }
 


  
  }

}

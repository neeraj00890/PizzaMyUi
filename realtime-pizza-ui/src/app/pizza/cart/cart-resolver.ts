import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PizzaService } from '../pizza-service';

@Injectable(    )
export class CartResolver implements Resolve <Observable<any>>{

    constructor(private pizzaService:PizzaService){

    }
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
      ): Observable<any> {
          
        return this.pizzaService.getCart()
      }
}
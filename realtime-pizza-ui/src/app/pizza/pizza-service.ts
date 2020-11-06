import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';




@Injectable()
export class PizzaService{
    baseURL='pizza/'
    constructor(private http:HttpClient){

    }

    getPizza() {
        const URL =`${this.baseURL}fetchAll`
        return this.http.get(URL).pipe(

            map(((res:Response)=>{
                return res
            })),
            catchError(this.errorHandler)
            
        )
    }

    updareCart(pizza):Observable<any>{
        const URL=`${this.baseURL}updateCart`
        return this.http.post(URL,pizza).pipe(

            map(((res)=>{
                return res
            })),
            catchError(this.errorHandler)
            
        )
    }



    signup(userModel){
        const URL=`${this.baseURL}signUp`;
        return this.http.post(URL,userModel).pipe(

            map(((res:Response)=>{
                return res
            })),
            catchError(this.errorHandler)
            
        )
    }

    login(login){
        const URL=`${this.baseURL}login`;
        return this.http.post(URL,login).pipe(

            map(((res:Response)=>{
                return res
            })),
            catchError(this.errorHandler)
            
        )
    }


    errorHandler(error){
        return throwError(error['message'])
    }

    getCart(){
        const URL=`${this.baseURL}getCart`
        return this.http.get(URL).pipe(

            map(((res:Response)=>{
                return res
            })),
            catchError(this.errorHandler)
            
        )
    }

}
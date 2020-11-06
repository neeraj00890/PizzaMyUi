import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RootService } from './root.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'realtime-pizza-ui';

  constructor(public iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private router:Router,
    public rootService:RootService){
    iconRegistry.addSvgIcon('shopping_cart', sanitizer.bypassSecurityTrustResourceUrl( '../assets/svg/shopping-cart.svg'));
  }

  displayCart(){
    this.router.navigate(['cart']);
  }
}

import { routerTransition } from './router-transition.animation';
import { Component } from '@angular/core';


@Component({
  selector: 'stk-pages', 
  animations: [routerTransition],
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent {

  public getState(outlet): void {
    return outlet.activatedRouteData.state;
  }

}


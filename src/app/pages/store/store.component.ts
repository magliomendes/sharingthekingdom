import { Component, OnInit } from "@angular/core";
import { routerTransition } from './router-transition.animation';

@Component({
    selector: 'stk-store',
    animations: [routerTransition],
    templateUrl: './store.component.html'
})

export class StoreComponent implements OnInit {

    constructor() { }

    ngOnInit() { }

    public getState(outlet): void {
        return outlet.activatedRouteData.state;
    }

}


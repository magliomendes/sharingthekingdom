import { Router } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import { routerTransition } from './router-transition.animation';


@Component({
    selector: 'stk-devotionals',
    animations: [routerTransition],
    templateUrl: './devotionals.component.html',
    styleUrls: ['./devotionals.component.scss']
})

export class DevotionalsComponent implements OnInit {

    constructor() { }

    ngOnInit() { }

    public getState(outlet): void {
        return outlet.activatedRouteData.state;
    }

}


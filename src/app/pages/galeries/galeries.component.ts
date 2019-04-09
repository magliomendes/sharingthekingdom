import { Router } from '@angular/router';
import { Component, OnInit, DoCheck } from "@angular/core";
import * as Instafeed from 'instafeed.js';

@Component({
    selector: 'stk-galeries',
    templateUrl: './galeries.component.html',
    styleUrls: ['./galeries.component.scss']
})

export class GaleriesComponent implements DoCheck {

    tempLoading: boolean = false;
    loading: boolean = false;

    constructor(
        private router: Router
    ) {
        this.tempLoading = new Instafeed({
            get: 'user',
            sortBy: 'most-recent',
            userId: '5405478335',
            accessToken: '5405478335.e4c9085.14d393aab88f4b06a47f2ed98e552c90',
            resolution: 'low_resolution',
            template: '<a href="{{link}}" class="feed-link"><img src="{{image}}" class="feed-image" /></a>'
        }).run();
    }

    ngDoCheck() {
        setTimeout(() => {
            this.loading = this.tempLoading
        }, 2500);
    }

    backToSections() {
        this.router.navigate(['/sections'])
    }
}
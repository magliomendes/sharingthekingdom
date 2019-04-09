import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { pulseBackground, infinityArrowDown, sentenceFromLeft, sentenceFromZ } from "./animation/home.animation";

@Component({
    selector: 'stk-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [
        pulseBackground,
        infinityArrowDown,
        sentenceFromLeft,
        sentenceFromZ
    ]
})

export class HomeComponent implements OnInit {

    circle = 'active';
    arrow = 'active';
    fSentence = 'active';
    zSentence = 'active';

    constructor(
        private router: Router
    ) { 
        
    }

    ngOnInit() {
    }

    circleAnimation($event) {
        if (0 < 1) {
            this.circle = this.circle === 'active' ? 'inactive' : 'active';
        }
    }

    arrowAnimation($event) {
        if (0 < 1) {
            this.arrow = this.arrow === 'active' ? 'inactive' : 'active';
        }
    }

    fSentenceAnimation($event) {
        if (0 < 1) {
            this.fSentence = this.fSentence === 'active' ? 'inactive' : 'active';
        }
    }

    zSentenceAnimation($event) {
        if (0 < 1) {
            this.zSentence = this.zSentence === 'active' ? 'inactive' : 'active';
        }
    }

    toCalendar() {
        this.router.navigate(['/calendar'])
    }

}


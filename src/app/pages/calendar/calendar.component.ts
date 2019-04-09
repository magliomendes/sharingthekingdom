import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'stk-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss']
})

export class CalendarComponent implements OnInit {

    defaultImage = "";
    stkMap = "/assets/images/map.png";
    offset = 1;

    constructor(
        private router: Router
    ) { }

    ngOnInit() {
    }

    googleMapsLocale() {
        window.open("https://www.google.com.br/maps/place/Igreja+do+Nazareno/@-22.9351657,-47.0262685,17z/data=!4m5!3m4!1s0x94c8cef49bcc9463:0x270df23f03cbda15!8m2!3d-22.9353732!4d-47.025024", "_blank")
    }
}
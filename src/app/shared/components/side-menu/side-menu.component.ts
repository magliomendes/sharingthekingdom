import { Router, NavigationStart } from '@angular/router';
import { Component, AfterContentChecked, ViewChild, ElementRef } from "@angular/core";
declare var $;
@Component({
    selector: 'stk-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.scss']
})

export class SideMenuComponent implements AfterContentChecked {

    @ViewChild('collapseMenu') collapseMenu: ElementRef;

    bgColor;
    fontColor;
    images;
    arrowToggle;

    constructor(
        private router: Router,
    ) { }

    ngAfterContentChecked() {
        this.checkRouter()
    }

    checkRouter() {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationStart) {
                if (event.url == '/galeries') {
                    this.bgColor = "rgba(232, 232, 232, .8)";
                    this.fontColor = "#1d1d1b";
                    this.images = "/assets/images/nome-preto.svg"
                    this.arrowToggle = "bColor";
                } else {
                    this.fontColor = "#fff";
                    this.images = "/assets/images/nome-branco.svg";
                    this.arrowToggle = "wColor";
                    this.bgColor = "rgba(0, 0, 0, 0.7)";
                }
            }
        });
    }

}

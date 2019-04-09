import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'pedro-maglio-mendes',
    templateUrl: './about-me.component.html',
    styleUrls: ['./about-me.component.scss']
})

export class AboutMeComponent implements OnInit {

    @Input() needsContrast: boolean = false;

    pTagColor: string = '#e8e8e8';
    myNameColor: string = '#ffd75f'

    constructor() { }

    ngOnInit() {
        if (this.needsContrast) {
            this.pTagColor = '#1d1d1b';
            this.myNameColor = '#dd4745'
        } else {
            this.pTagColor = '#e8e8e8';
            this.myNameColor = '#ffd75f'
        }
    }

    toGithub() {
        window.open("https://github.com/magliomendes", "_blank")
    }

    toLinkedin() {
        window.open("https://www.linkedin.com/in/pedro-maglio-mendes/", "_blank")
    }

}


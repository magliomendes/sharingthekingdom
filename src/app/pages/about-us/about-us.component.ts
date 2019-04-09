import { Component } from "@angular/core";

@Component({
    selector: 'stk-about-us',
    templateUrl: './about-us.component.html',
    styleUrls: ['./about-us.component.scss']
})

export class AboutUsComponent {

    defaultImage = "";
    offset = 100;

    constructor() { }

    toFacebook() {
        window.open("https://www.facebook.com/SharingTKingdom/", "_blank")
    }

    toInstagram() {
        window.open("https://www.instagram.com/sharingthekingdom/", "_blank")
    }

    toTwitter() {
        window.open("https://twitter.com/sharingtkingdom", "_blank")
    }

    toYoutube() {
        window.open("https://www.youtube.com/channel/UC6ZTSMjvayGG3MjaQ30XVcg", "_blank")
    }

}


import { Component } from "@angular/core";
import { rotate } from "./loading.animation";

@Component({
    selector: 'stk-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.scss'],
    animations: [
        rotate
    ]
})

export class LoadingComponent {

    first = 'active';

    constructor() { }

    firstAnimation($event) {
        if (0 < 1) {
            this.first = this.first === 'active' ? 'inactive' : 'active';
        }
    }
}

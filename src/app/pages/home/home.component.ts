import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'stk-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent{

    constructor(
        private router: Router
    ) { 
        
    }

    toPhotos() {
        this.router.navigate(['/calendar'])
    }

}


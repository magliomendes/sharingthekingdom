import { Devotionals } from './../../../shared/models/devotionals.class';

import { Component, OnInit } from "@angular/core";
import { AngularFirestore, } from '@angular/fire/firestore';
import { Observable } from "rxjs";
import { Router } from "@angular/router";


@Component({
    selector: 'stk-devotional-reading',
    templateUrl: './devotional-reading.component.html',
    styleUrls: ['./devotional-reading.component.scss']
})

export class DevotionalReadingComponent implements OnInit {

    devotionalId: number = undefined;
    devotional: Devotionals = undefined;
    loading: boolean = false;

    constructor(
        private router: Router,
        private afs: AngularFirestore,
    ) {
        this.devotionalId = parseInt(this.router.url.split('/').find(part => part.match(/\d/) != undefined));
    }

    ngOnInit() {
        this.afs.collection('STK_Devotional_Cards').get().subscribe((snap) => {
            snap.forEach((doc) => {
                if (doc.get('id') === this.devotionalId) {
                    this.devotional = doc.data() as Devotionals;
                    setTimeout(() => {
                        this.loading = true;
                    }, 1000);
                }
            })
        })
    }

    backToList(){
        this.router.navigate(['/devotionals'])
    }

}
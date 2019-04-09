import { Router } from '@angular/router';
import { Devotionals } from '@shared/models/devotionals.class';
import { Component, OnInit } from "@angular/core";
import { AngularFirestore, } from '@angular/fire/firestore';

@Component({
    selector: 'stk-devotionals-list',
    templateUrl: './devotionals-list.component.html',
    styleUrls: ['./devotionals-list.component.scss']
})

export class DevotionalsListComponent implements OnInit {

    devotionalList: Devotionals[] = [];
    loading: boolean = false;

    defaultImage = '/assets/images/logo-legenda-branco-resize.png';
    offset = 1;

    constructor(
        private afs: AngularFirestore,
        private router: Router
    ) {
        this.afs.collection('STK_Devotional_Cards').get().subscribe((snap) => {
            snap.forEach((doc) => {
                this.devotionalList.push(doc.data() as Devotionals);
                if (this.devotionalList.length === snap.size) {
                    setTimeout(() => {
                        this.loading = true;
                    }, 1500);
                }
            })
        })
    }

    ngOnInit() { }

    onDevotionalClick(devotionalId: number) {
        this.router.navigate(['/devotionals/reading/' + devotionalId])
    }

    backToSections() {
        this.router.navigate(['/sections'])
    }

}
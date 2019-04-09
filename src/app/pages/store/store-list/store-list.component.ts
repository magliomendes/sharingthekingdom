import { Store } from '@shared/models/store.class';
import { Router } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import { AngularFirestore, } from '@angular/fire/firestore';
import { slideDownTilt } from '@app/shared/animations/slide-down-tilt.animaiton';

@Component({
    selector: 'stk-store-list',
    templateUrl: './store-list.component.html',
    styleUrls: ['./store-list.component.scss'],
    animations: [slideDownTilt(".stk-item")]
})

export class StoreListComponent implements OnInit {

    storeList: Store[] = [];
    storeListOriginal: Store[] = [];
    loading: boolean = false;
    defaultImage = '/assets/images/logo-legenda-branco-resize.png';
    offset = 1;
    selectedFilter: string = '';

    constructor(
        private afs: AngularFirestore,
        private router: Router
    ) {
        this.afs.collection('STK_Store').get().subscribe((snap) => {
            snap.forEach((doc) => {
                this.storeList.push(doc.data() as any);
                if (this.storeList.length === snap.size) {
                    setTimeout(() => {
                        this.loading = true;
                        this.storeListOriginal = this.storeList;
                    }, 1000);
                }
            })
        })
    }

    ngOnInit() { }

    onFilter(filterCode: string) {
        if (filterCode.length) {
            this.selectedFilter = filterCode;
            this.storeListOriginal = [];
            this.storeList.filter((size) => {
                size.Tamanhos.forEach((st) => {
                    if (st === filterCode) {
                        this.storeListOriginal.push(size);
                    }
                })
            });
        } else {
            this.storeListOriginal = this.storeList;
            this.selectedFilter = '';
        }
    }

    onStoreClick(storeId: number) {
        this.router.navigate(['/store/detail/' + storeId])
    }

    backToSections() {
        this.router.navigate(['/sections'])
    }

}
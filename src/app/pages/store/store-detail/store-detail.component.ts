import { Store } from '@shared/models/store.class';
import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList, Directive } from "@angular/core";
import { AngularFirestore, } from '@angular/fire/firestore';
import { Router } from "@angular/router";

@Component({
    selector: 'stk-store-detail',
    templateUrl: './store-detail.component.html',
    styleUrls: ['./store-detail.component.scss']
})

export class StoreDetailComponent implements OnInit {

    @ViewChild('activeImage') activeImage: ElementRef;
    @ViewChildren('imageList') imageList: QueryList<any>

    storeId: number = undefined;
    store: Store = undefined;
    loading: boolean = false;
    defaultImage = '/assets/images/logo-legenda-branco-resize.png';
    lazyLoad = undefined;
    offset = 1;
    newFreight: number;

    constructor(
        private router: Router,
        private afs: AngularFirestore,
    ) {
        this.storeId = parseInt(this.router.url.split('/').find(part => part.match(/\d/) != undefined));
    }

    ngOnInit() {
        this.afs.collection('STK_Store').get().subscribe((snap) => {
            snap.forEach((doc) => {
                if (doc.get('id') === this.storeId) {
                    this.store = doc.data() as Store;
                    this.lazyLoad = this.store.Fotos[1];
                    setTimeout(() => {
                        this.loading = true;
                        this.imageList.forEach(image => {
                            image.addEventListener("click", this.changeImage)
                        });
                    }, 1000);
                }
            })
        });

    }

    backToList() {
        this.router.navigate(['/store'])
    }

    changeImage(e) {
        this.activeImage.nativeElement.src = e.target.src;
    }

    addFreight(freight: number) {
        this.newFreight = 1;
    }

}
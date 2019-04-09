import { FormsModule } from '@angular/forms';
import { StoreListComponent } from './store-list/store-list.component';
import { StoreComponent } from './store.component';
import { SharedModule } from '@shared/modules/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { readingRouting } from './store.routing';
import { StoreDetailComponent } from './store-detail/store-detail.component';

@NgModule({
    declarations: [
        StoreComponent,
        StoreListComponent,
        StoreDetailComponent
    ],
    imports: [
        SharedModule,
        RouterModule,
        HttpClientModule,
        CommonModule,
        readingRouting,
        FormsModule
    ],
    providers: []
})
export class StoreModule { }

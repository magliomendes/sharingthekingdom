import { SharedModule } from '@shared/modules/shared.module';
import { DevotionalsComponent } from './devotionals.component';
import { DevotionalReadingComponent } from './devotional-reading/devotional-reading.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { readingRouting } from './devotionals.routing';
import { DevotionalsListComponent } from './devotionals-list/devotionals-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        DevotionalReadingComponent,
        DevotionalsComponent,
        DevotionalsListComponent
    ],
    imports: [
        SharedModule,
        readingRouting,
        RouterModule,
        HttpClientModule,
        CommonModule,
    ],
    providers: []
})
export class DevotionalModule { }

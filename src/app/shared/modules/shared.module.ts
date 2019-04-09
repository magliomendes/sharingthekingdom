import { LazyLoadImageModule, intersectionObserverPreset } from 'ng-lazyload-image';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './../components/loading/loading.component';
import { NgModule } from "@angular/core";
import { SideMenuComponent } from '../components/side-menu/side-menu.component';
import { RouterModule } from '@angular/router';
import { LazyLoadDirective } from '../directives/lazyload.directive';
import { AboutMeComponent } from '../components/about-me/about-me.component';

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        LazyLoadImageModule.forRoot({
            preset: intersectionObserverPreset
        })
    ],
    declarations: [
        SideMenuComponent,
        LoadingComponent,
        LazyLoadDirective,
        AboutMeComponent
    ],
    exports: [
        SideMenuComponent,
        LoadingComponent,
        LazyLoadImageModule,
        LazyLoadDirective,
        AboutMeComponent
    ]
})

export class SharedModule { }
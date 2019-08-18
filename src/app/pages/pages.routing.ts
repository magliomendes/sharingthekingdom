import { CalendarComponent } from './calendar/calendar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { SectionsComponent } from './sections/sections.component';
import { GaleriesComponent } from './galeries/galeries.component';
import { VisitingFormComponent } from './visitingForm/visitingForm.component';
import { InstagramPostsComponent } from './instagram-posts/instagram-posts.component';

export const pagesRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: '', component: PagesComponent, children: [
            { path: 'home', component: HomeComponent, data: { state: 'home' } },
            { path: 'about-us', component: AboutUsComponent, data: { state: 'about-us' } },
            { path: 'sections', component: SectionsComponent, data: { state: 'sections' } },
            { path: 'galeries', component: GaleriesComponent, data: { state: 'galeries' } },
            { path: 'calendar', component: CalendarComponent, data: { state: 'calendar' } },
            { path: 'visiting', component: VisitingFormComponent, data: { state: 'visiting' } },
            { path: 'store', loadChildren: './store/store.module#StoreModule' },
            { path: 'devotionals', loadChildren: './devotionals/devotionals.module#DevotionalModule' },
            // used to share news on social midias
            { path: 'instagram-posts-making-private', component: InstagramPostsComponent },
            { path: '**', redirectTo: 'home', pathMatch: 'full' },
        ]
    },

]);


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CalendarComponent } from './calendar/calendar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { pagesRouting } from './pages.routing';
import { SectionsComponent } from './sections/sections.component';
import { GaleriesComponent } from './galeries/galeries.component';
import { SharedModule } from '@shared/modules/shared.module';
import { VisitingFormComponent } from './visitingForm/visitingForm.component';
// import { InstagramPostsComponent } from './instagram-posts/instagram-posts.component';

@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    AboutUsComponent,
    SectionsComponent,
    GaleriesComponent,
    CalendarComponent,
    VisitingFormComponent,
    // InstagramPostsComponent
  ],
  imports: [
    pagesRouting,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class PagesModule { }

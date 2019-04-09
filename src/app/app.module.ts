import { environment } from './../environments/environment.prod';
import { AngularFireDatabase } from '@angular/fire/database';
import { PublicHttp } from './shared/http/public-http.class';
import { PagesModule } from './pages/pages.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from "./app.routing";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from './shared/modules/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    routing,
    PagesModule,
    SharedModule,
    CommonModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.config, 'sharing-the-kingdom'),
    AngularFirestoreModule,
    FormsModule
  ],
  entryComponents: [
    AppComponent
  ],
  providers: [PublicHttp, AngularFirestore, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }

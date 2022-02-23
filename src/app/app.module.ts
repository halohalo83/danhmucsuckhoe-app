import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';
@NgModule({
  declarations: [
    AppComponent,
    BackToTopComponent
  ],
  imports: [
    BrowserModule, SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

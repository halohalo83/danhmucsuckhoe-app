import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgsRevealModule} from 'ngx-scrollreveal';
import { AppComponent } from './app.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';
import { CountUpModule } from 'ngx-countup';

@NgModule({
  declarations: [
    AppComponent,
    BackToTopComponent
  ],
  imports: [
    BrowserModule, SlickCarouselModule, NgsRevealModule, CountUpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

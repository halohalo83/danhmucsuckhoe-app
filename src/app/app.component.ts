import { Component } from '@angular/core';
import {NgsRevealConfig} from 'ngx-scrollreveal';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgsRevealConfig] // add NgsRevealConfig to the component providers
})
export class AppComponent {
  constructor(config: NgsRevealConfig) {
    // customize default values of ngx-scrollreveal directives used by this component tree
    config.duration = 5000;
    config.easing = 'cubic-bezier(0.645, 0.045, 0.355, 1)';

    //other options here
  }
  title = 'danhmucsuckhoe-app';
  // Danh mục slide
  slides = [
    { img: '../assets/img/positive-girl-dentist-1.png' },
    { img: '../assets/img/positive-girl-dentist-2.png' },
    { img: '../assets/img/positive-girl-dentist-3.png' },
    { img: '../assets/img/positive-girl-dentist-4.png' },
    { img: '../assets/img/positive-girl-dentist-5.png' },
    { img: '../assets/img/positive-girl-dentist-1.png' },
    { img: '../assets/img/positive-girl-dentist-2.png' },
    { img: '../assets/img/positive-girl-dentist-3.png' },
    { img: '../assets/img/positive-girl-dentist-4.png' },
    { img: '../assets/img/positive-girl-dentist-5.png' },
  ];
  // Config slide
  slideConfig = {
    slidesToShow: 6,
    slidesToScroll: 6,
    dots: true,
    responsive: [
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
    ],
  };
}

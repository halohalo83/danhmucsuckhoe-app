import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'danhmucsuckhoe-app';
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
  slideConfig = {
    slidesToShow: 6,
    slidesToScroll: 6,
    dots: true,
    // nextArrow: '<button type="button" class="my-slick-next"></button>',
    // prevArrow: '<button type="button" class="my-slick-prev"></button>',
    responsive: [
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        }
      }
    ]
  };
}

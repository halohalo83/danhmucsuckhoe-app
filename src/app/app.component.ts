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
  slideConfig = { slidesToShow: 4, slidesToScroll: 4 };
}

import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
    '../assets/css/responsive/app-responsive.css',
  ],
})
export class AppComponent {
  windowScrolled: boolean = false;
  constructor(@Inject(DOCUMENT) private document: Document) {}
  @HostListener('window:scroll', [])
  /**
   * Hàm khởi tạo window scroll
   * Author: NATUAN 23/02/2022
   */
  onWindowScroll() {
    if (
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop > 100
    ) {
      this.windowScrolled = true;
    } else if (
      (this.windowScrolled && window.pageYOffset) ||
      document.documentElement.scrollTop ||
      document.body.scrollTop < 10
    ) {
      this.windowScrolled = false;
    }
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
          dots: true,
          arrows: false,
        },
      },
    ],
  };
}

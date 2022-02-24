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
  constructor(@Inject(DOCUMENT) private document: Document) {}
  title = 'danhmucsuckhoe-app';
  showWrapper = false; // hiển thị navbar mobile
  windowScrolled = false; // Màn hiện cuộn
  // option cho count number
  countOptions = {
    separator: '.'
  }
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
        breakpoint: 1139,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          arrows: false,
        },
      },
    ],
  };
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
  /**
   * Hàm click navbar mobile
   * Author: NATUAN 23/02/2022
   */
  onClickWrapper() {
    this.showWrapper = !this.showWrapper;
  }
  /**
   * Hàm click đóng navbar mobile
   * Author: NATUAN 23/02/2022
   */
  onCloseWrapper() {
    this.showWrapper = false;
  }
}

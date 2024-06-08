import { Component, OnInit } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
import { BehaviorSubject } from "rxjs";
import { faChevronLeft , faChevronRight } from '@fortawesome/free-solid-svg-icons';

import SwiperCore , {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
} from 'swiper';

SwiperCore.use([Navigation]);
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight
  breakpoints = {
    0: {
      slidesPerView: 1
    },
    600: {
      slidesPerView: 2
    },
    1050: {
      slidesPerView: 3
    },
    // 1400: {
    //   slidesPerView: 4
    // },
    // 1900: {
    //   slidesPerView: 5
    // }
  };
  services = [ 
      {status:true,index:1 ,heading:'Assignments', description:"All academic and business writing simply has to have absolutely perfect grammar, punctuation, spelling, formatting, and composition. Our experts proofread and edit your project with a detailed eye and with complete knowledge of all writing and style conventions. Proofreading sets any writing apart from “acceptable” and makes it exceptional. We can handle lab reports, academic papers, case study, book reviews and argumentative essays."},
      {status:false, index:2 ,heading:'Essays', description:"All academic and business writing simply has to have absolutely perfect grammar, punctuation, spelling, formatting, and composition. Our experts proofread and edit your project with a detailed eye and with complete knowledge of all writing and style conventions. Proofreading sets any writing apart from “acceptable” and makes it exceptional. We can handle lab reports, academic papers, case study, book reviews and argumentative essays."},
      {status:false,index:3 ,heading:'Dissertations', description:"All academic and business writing simply has to have absolutely perfect grammar, punctuation, spelling, formatting, and composition. Our experts proofread and edit your project with a detailed eye and with complete knowledge of all writing and style conventions. Proofreading sets any writing apart from “acceptable” and makes it exceptional. We can handle lab reports, academic papers, case study, book reviews and argumentative essays."},
      {status:false,index:4 ,heading:'Editing and Proofreading', description:"All academic and business writing simply has to have absolutely perfect grammar, punctuation, spelling, formatting, and composition. Our experts proofread and edit your project with a detailed eye and with complete knowledge of all writing and style conventions. Proofreading sets any writing apart from “acceptable” and makes it exceptional. We can handle lab reports, academic papers, case study, book reviews and argumentative essays."},
      {status:false,index:4 ,heading:'Editing and Proofreading', description:"All academic and business writing simply has to have absolutely perfect grammar, punctuation, spelling, formatting, and composition. Our experts proofread and edit your project with a detailed eye and with complete knowledge of all writing and style conventions. Proofreading sets any writing apart from “acceptable” and makes it exceptional. We can handle lab reports, academic papers, case study, book reviews and argumentative essays."},
      {status:false,index:4 ,heading:'Editing and Proofreading', description:"All academic and business writing simply has to have absolutely perfect grammar, punctuation, spelling, formatting, and composition. Our experts proofread and edit your project with a detailed eye and with complete knowledge of all writing and style conventions. Proofreading sets any writing apart from “acceptable” and makes it exceptional. We can handle lab reports, academic papers, case study, book reviews and argumentative essays."}
  
  
  
  
  
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';


interface achievements {
  image:string;
  value:string;
  description:string;
}
@Component({
  selector: 'app-herobanner',
  templateUrl: './herobanner.component.html',
  styleUrls: ['./herobanner.component.scss']
})
export class HerobannerComponent implements OnInit {
  achievements : achievements []
  constructor() { 
    this.achievements = [
      { image:'../../../assets/icons/Teacher.svg' , value:'250+' , description:'Academic Writing Experts'},
      { image:'../../../assets/icons/money-back-guarantee 1.svg' , value:'100%' , description:'Money Back Guarantee'},
      { image:'../../../assets/icons/authentic.svg' , value:'100%' , description:'Plagiarism Free Content'},
      { image:'../../../assets/icons/star.svg' , value:'50%' , description:'Prepay Upfront - Half After We Deliver'},
    ]
  }

  ngOnInit(): void {
  }

}

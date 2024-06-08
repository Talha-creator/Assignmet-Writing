import { Component, OnInit } from '@angular/core';


interface headerOptions {
  icon: string;
  text: string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headerOptions : headerOptions []

  constructor() {

    this.headerOptions= [
       { icon: '../../../assets/icons/Icon Color.svg', text: '24/7 Always Open'},
       { icon: '../../../assets/icons/phone.svg', text: '(+1) 888 687 4420'},
       { icon: '../../../assets/icons/mail.svg', text: 'info@dummywebsite.com'}
      
      ]
   }

  ngOnInit(): void {
  }

}

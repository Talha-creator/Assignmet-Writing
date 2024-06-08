import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  socialMediaIcons = ['../../../assets/icons/facebook.svg','../../../assets/icons/instagram.svg','../../../assets/icons/twitter.svg','../../../assets/icons/youtube.svg','../../../assets/icons/Pinterest.svg']
  constructor() { }

  ngOnInit(): void {
  }

}

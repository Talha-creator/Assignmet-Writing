import { Component, OnInit } from '@angular/core';

interface sitemap {
  label:String;
  route :string;
}

@Component({
  selector: 'app-navigationmap',
  templateUrl: './navigationmap.component.html',
  styleUrls: ['./navigationmap.component.scss']
})
export class NavigationmapComponent implements OnInit {

  sitemap : sitemap [];
  constructor() { 
    this.sitemap = [
      { label:'Writers' , route:''},
      { label:'Samples' , route:''},
      { label:'Pricing' , route:''},
      { label:'FAQs' , route:''},
      { label:'Why Us' , route:''},
      { label:'Reviews' , route:''},
      { label:'Blogs' , route:''},
    ]
  }

  ngOnInit(): void {
  }

}

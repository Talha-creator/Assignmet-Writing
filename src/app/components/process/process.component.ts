import { Component, OnInit } from '@angular/core';


interface process{
  image:string;
  description:string
}
@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent implements OnInit {

  process : process []
  constructor() { 

    this.process= [
  {image: '../../../assets/icons/calendar.svg', description:'Deadline Driven'},
  {image: '../../../assets/icons/bus.svg', description:'100% Money back gurantee'},
  {image: '../../../assets/icons/money back.svg', description:'Prepay 50% Upfront - Half after we deliver'},
  {image: '../../../assets/icons/notes.svg', description:'No Plagiarism Guranteed (Reports Provided)'},
  {image: '../../../assets/icons/Confidential.svg', description:'100% Private and Confidential'},
  
    ]
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { faChevronDown,faChevronUp ,faArrowRight   } from '@fortawesome/free-solid-svg-icons';
import { SlideInOutAnimation } from '../../animations/animation';

  interface faqs {
    question :string;
    answer:string;
    status: boolean
  }
@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss'],
  animations: [SlideInOutAnimation]
})
export class FaqsComponent implements OnInit {
  faArrowRight = faArrowRight
  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;
  faqsList : faqs [];
  animationState = 'out';
  constructor() {
    this.faqsList=[
      {
        question :'I need someone to write my essay for me, who can help me?',
      answer:'Unfortunately, we don’t write essays for free. However, we do provide free samples of previous essays we have written. Be very careful of someone who is promising you an essay for “free”. You get what you pay for. Nothing is free and if it is free then you might end with a low-quality essay.We offer reasonably priced services so that students can get quality writing help within their budget.',
      status: false
      },
      {
        question :'What you should not write in a college essay?',
      answer:'Unfortunately, we don’t write essays for free. However, we do provide free samples of previous essays we have written. Be very careful of someone who is promising you an essay for “free”. You get what you pay for. Nothing is free and if it is free then you might end with a low-quality essay.We offer reasonably priced services so that students can get quality writing help within their budget.',
      status: false
      },
      {
        question :'Can you write my essay for free?',
      answer:'Unfortunately, we don’t write essays for free. However, we do provide free samples of previous essays we have written. Be very careful of someone who is promising you an essay for “free”. You get what you pay for. Nothing is free and if it is free then you might end with a low-quality essay.We offer reasonably priced services so that students can get quality writing help within their budget.',
      status: false
      }
    ]
   }

  ngOnInit(): void {
  }

  toggleShowDiv(divName: string ,item:any) {   
      this.animationState = this.animationState === 'out' ? 'in' : 'out';

    item.status=!item.status
  }
  showAnswer(item :any)
  {
    console.log(item)
   
    item.status=!item.status
    

  }

}

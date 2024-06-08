import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/services/payment.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  dateObject : any;

  pages:number;
  //reactive form
  emailform: FormGroup; 
  showDropDown : boolean ;
  label ='card';
  showBalance:boolean;
  paymentbutton = { status:false , text:"Proceed to Payment"};
  showDiscount :any ;
  processSteps = [ { stepno:1,status:true , label:'Calcuate Price'},{ stepno:2,status:false , label:'Calcuate Price'},{ stepno:3,status:false , label:'Calcuate Price'}]
  paymentTypes = [{ name:'card', status:true, text:'Pay with Card', imagegrey:'../../../assets/icons/Group 12439greycard.svg' ,imageblue:'../../../assets/icons/Group 12439blue.svg'},
  { name:'wallet', status:false, text:'Pay with Wallet', imagegrey:'../../../assets/icons/Vectorgreywallet.svg' ,imageblue:'../../../assets/icons/Vectorbluewallet.svg'}]
 

  constructor( private paymentService: PaymentService ,  private fb: FormBuilder,) {
    this.dateObject = { date: null ,time: null , zone:'AM'}
    this.pages=1
    this.showDiscount=false
    this.showBalance=false
    this.showDropDown=false;
    this.emailform = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
     
    });
 
   }

  ngOnInit(): void {

    
    this.getPayment()
  }

  getPayment()
  {
    this.paymentService.getPayment().subscribe((res:any)=>{
      console.log(res)
    })
  }

  addPage()
  {
    this.pages++
  }
  subPage()
  {
    if (this.pages>0){
      this.pages--
    }
    
  }
  showValues(event : any)
  {
    console.log(event.target.checked)
    if (event.target.checked){
      this.showDiscount=true
    }
    else 
    {
      this.showDiscount=false
    }
  }
  selectType(type:any){
    for (let item of this.paymentTypes){
      item.status=false
    }
    type.status=true
    this.label=type.name
  }
  showbalance()
  {
    this.showBalance=!this.showBalance
  }
  submitPayment(){
  
    this.paymentbutton.status=!this.paymentbutton.status;
  }

  showDateValue()
  {
    this.getMeridian()
    console.log(this.dateObject.date , this.dateObject.time, this.dateObject.zone)
  }
   getMeridian() {
    var timeSplit =this.dateObject.time.split(':'),
      hours,
      minutes,
      meridian;
    hours = timeSplit[0];
    minutes = timeSplit[1];
    if (hours > 12) {
      meridian = 'PM';
      hours -= 12;
    } else if (hours < 12) {
      meridian = 'AM';
      if (hours == 0) {
        hours = 12;
      }
    } else {
      meridian = 'PM';
    }
    this.dateObject.zone=meridian
    // alert(hours + ':' + minutes + ' ' + meridian);
  }


  changeFormate()
  {
    console.log(this.dateObject.time.substring(0,5))
  }
}

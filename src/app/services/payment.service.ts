import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private httpClient: HttpClient) { }

  getPayment()
  {
  
      return this.httpClient.get('https://adminbackend.pakistansweethome.org.pk/api/test', )
 
    
  }
}

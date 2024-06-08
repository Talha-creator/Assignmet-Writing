import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { HeaderComponent } from './components/header/header.component';
import { HerobannerComponent } from './components/herobanner/herobanner.component';
import { NavigationmapComponent } from './components/herobanner/navigationmap/navigationmap.component';
import { ProcessComponent } from './components/process/process.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ServicesComponent } from './components/services/services.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PricingComponent } from './components/pricing/pricing.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HerobannerComponent,
    NavigationmapComponent,
    ProcessComponent,
    FooterComponent,
    LandingpageComponent,
    ServicesComponent,
    QuestionsComponent,
    FaqsComponent,
    PricingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,SwiperModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HerobannerComponent } from './components/herobanner/herobanner.component';
import { ProcessComponent } from './components/process/process.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ServicesComponent } from './components/services/services.component';

const routes: Routes = [
  {path:'' , component:LandingpageComponent},
  {path:'header' , component:HeaderComponent},
  {path:'hero-banner' , component:HerobannerComponent},
  {path:'process' , component:ProcessComponent},
  {path:'footer' , component:FooterComponent},
  {path:'services' , component:ServicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

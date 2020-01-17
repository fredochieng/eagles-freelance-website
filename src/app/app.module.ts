import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/home/includes/footer/footer.component';
import { HeaderComponent } from './components/home/includes/header/header.component';
import { SliderComponent } from './components/home/includes/slider/slider.component';
import { AboutComponent } from './components/home/includes/about/about.component';
import { HomepageServicesComponent } from './components/home/includes/homepage-services/homepage-services.component';
import { ChooseUsComponent } from './components/home/includes/choose-us/choose-us.component';
import { WritersComponent } from './components/home/includes/writers/writers.component';
import { TestimonialsComponent } from './components/home/includes/testimonials/testimonials.component';
import { FaqsComponent } from './components/home/includes/faqs/faqs.component';
import { StartBoxComponent } from './components/home/includes/start-box/start-box.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, FooterComponent, HeaderComponent, SliderComponent, AboutComponent, HomepageServicesComponent, ChooseUsComponent, WritersComponent, TestimonialsComponent, FaqsComponent, StartBoxComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

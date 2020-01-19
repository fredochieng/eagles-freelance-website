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
import { ProcessComponent } from './components/home/includes/process/process.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { PreloaderComponent } from './components/home/includes/preloader/preloader.component';
import { PageTitleComponent } from './components/about-us/includes/page-title/page-title.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { AcademicServicesComponent } from './components/services/includes/academic-services/academic-services.component';
import { SoftwareServicesComponent } from './components/services/includes/software-services/software-services.component';
import { AssignmentsComponent } from './components/assignments/assignments.component';
import { ReviewsComponent } from './components/reviews/reviews.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, FooterComponent, HeaderComponent, SliderComponent, AboutComponent, HomepageServicesComponent, ChooseUsComponent, WritersComponent, TestimonialsComponent, FaqsComponent, StartBoxComponent, ProcessComponent, AboutUsComponent, PreloaderComponent, PageTitleComponent, ContactComponent, ServicesComponent, AcademicServicesComponent, SoftwareServicesComponent, AssignmentsComponent, ReviewsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

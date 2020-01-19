import { ReviewsComponent } from "./components/reviews/reviews.component";
import { AssignmentsComponent } from "./components/assignments/assignments.component";
import { ServicesComponent } from "./components/services/services.component";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ContactComponent } from "./components/contact/contact.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutUsComponent },
  { path: "services", component: ServicesComponent },
  { path: "assignments", component: AssignmentsComponent },
  { path: "reviews", component: ReviewsComponent },
  { path: "contact", component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./Features/home/home.component";
import { AboutUsComponent } from "./Features/about-us/about-us.component";
import { MenuComponent } from "./Features/menu/menu.component";
import { RouteParameterComponent } from './route-parameter/route-parameter.component';
import { EmployeeDetailsComponent } from './Features/employee-details/employee-details.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent, HomeComponent, AboutUsComponent, MenuComponent, RouteParameterComponent, EmployeeDetailsComponent],
  imports: [BrowserModule, AppRoutingModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

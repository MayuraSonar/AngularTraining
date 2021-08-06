import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./Features/home/home.component";
import { AboutUsComponent } from "./Features/about-us/about-us.component";
import { RouteParameterComponent } from "./route-parameter/route-parameter.component";
import { EmployeemoduleModule } from "./Features/Employee/employeemodule/employeemodule.module";
import { EmployeeDetailsComponent } from './Features/employee-details/employee-details.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "aboutus", component: AboutUsComponent },
  { path: "router/:id", component: RouteParameterComponent },
  {
    path: "employee",
    loadChildren: () =>
      import("./Features/Employee/employeemodule/employeemodule.module").then(
        (e) => EmployeemoduleModule
      ),
  },
  {path:'details',component:EmployeeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './Components/employee/employee.component';
import { DatabindingComponent } from './Components/databinding/databinding.component';
import { SwitchComponent } from './Components/switch/switch.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { CustomDirectiveComponent } from './Components/custom-directive/custom-directive.component';
import { EmployeeDetailsComponent } from './Components/employee-details/employee-details.component';
import { EmployeeInfoComponent } from './Components/employee-info/employee-info.component';
import { RouteParameterComponent } from './Components/route-parameter/route-parameter.component';
// router:


const routes: Routes = [
 // {path: '', pathMatch: 'prefix', redirectTo: '/switch'},
 {path: '', component: DatabindingComponent},
 {path: 'databinding', component: DatabindingComponent},
{path: 'emp/:id', component: EmployeeComponent},
  {path: 'emp', component: EmployeeComponent, children: [
    {path: 'details', component: EmployeeDetailsComponent},
    {path: 'info', component: EmployeeInfoComponent}
  ]},
  {path: 'route/:id', component: RouteParameterComponent},
  {path: 'switch', component: SwitchComponent},
  {path: 'custom', component: CustomDirectiveComponent},
    {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

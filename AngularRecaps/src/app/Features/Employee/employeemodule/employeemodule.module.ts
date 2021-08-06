import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EmployeemoduleRoutingModule } from "./employeemodule-routing.module";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { AddEmployeeComponent } from "./add-employee/add-employee.component";
import { EditEmployeeComponent } from "./edit-employee/edit-employee.component";
import { ViewEmployeeComponent } from "./view-employee/view-employee.component";

@NgModule({
  declarations: [
    EmployeeListComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    ViewEmployeeComponent,
  ],
  imports: [CommonModule, EmployeemoduleRoutingModule],
})
export class EmployeemoduleModule {}

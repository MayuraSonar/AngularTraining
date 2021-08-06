import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { AddEmployeeComponent } from "./add-employee/add-employee.component";
import { ViewEmployeeComponent } from "./view-employee/view-employee.component";
import { EditEmployeeComponent } from "./edit-employee/edit-employee.component";
import { LeavesModule } from "../leaves/leaves.module";

const routes: Routes = [
  {
    path: "",
    component: EmployeeListComponent,
    children: [
      { path: "add", component: AddEmployeeComponent },
      { path: "view", component: ViewEmployeeComponent },
      { path: "edit", component: EditEmployeeComponent },
      {
        path: "leaves",
        loadChildren: () =>
          import("../leaves/leaves.module").then((l) => l.LeavesModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeemoduleRoutingModule {}

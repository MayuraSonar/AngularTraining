import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DoctorsAppointmentComponent } from "./doctors-appointment/doctors-appointment.component";
import { WFHComponent } from "./wfh/wfh.component";
import { ApplyComponent } from "./apply/apply.component";
import { LeaveTypeComponent } from "./leave-type/leave-type.component";
import { PaidLeaveComponent } from "./paid-leave/paid-leave.component";
import { BalanceComponent } from "./balance/balance.component";
import { SickLeaveComponent } from "./sick-leave/sick-leave.component";

const routes: Routes = [
  {
    path: "",
    component: LeaveTypeComponent,
    children: [
      {
        path: "apply",
        component: ApplyComponent,
        children: [
          { path: "wfh", component: WFHComponent },
          { path: "doctor", component: DoctorsAppointmentComponent },
        ],
      },
      {
        path: "balance",
        component: BalanceComponent,
        children: [
          { path: "paid", component: PaidLeaveComponent },
          { path: "sick", component: SickLeaveComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeavesRoutingModule {}

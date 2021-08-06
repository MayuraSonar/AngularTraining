import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LeavesRoutingModule } from "./leaves-routing.module";
import { ApplyComponent } from "./apply/apply.component";
import { BalanceComponent } from "./balance/balance.component";
import { WFHComponent } from "./wfh/wfh.component";
import { DoctorsAppointmentComponent } from "./doctors-appointment/doctors-appointment.component";
import { PaidLeaveComponent } from "./paid-leave/paid-leave.component";
import { SickLeaveComponent } from "./sick-leave/sick-leave.component";
import { LeaveTypeComponent } from "./leave-type/leave-type.component";

@NgModule({
  declarations: [
    ApplyComponent,
    BalanceComponent,
    WFHComponent,
    DoctorsAppointmentComponent,
    PaidLeaveComponent,
    SickLeaveComponent,
    LeaveTypeComponent,
  ],
  imports: [CommonModule, LeavesRoutingModule],
})
export class LeavesModule {
  constructor() {
    console.log("Leaves Module Loaded");
  }
}

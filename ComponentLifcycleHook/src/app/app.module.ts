import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentHookComponent } from './parent-hook/parent-hook.component';
import { ChildHookComponent } from './child-hook/child-hook.component';
import { DemoParentComponent } from './demo-parent/demo-parent.component';
import { DemoChildComponent } from './demo-child/demo-child.component';
import { ChangeColorDirective } from './change-color.directive';



@NgModule({
  declarations: [
    AppComponent,
    ParentHookComponent,
    ChildHookComponent,
    DemoParentComponent,
    DemoChildComponent,
    ChangeColorDirective


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

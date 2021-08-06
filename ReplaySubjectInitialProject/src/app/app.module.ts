import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';

@NgModule({
  declarations: [
    AppComponent,
    ReplaySubjectComponent,
    AsyncSubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

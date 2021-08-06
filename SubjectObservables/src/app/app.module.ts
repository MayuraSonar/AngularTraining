import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SubjectObserableComponent } from './subject-obserable/subject-obserable.component';
import { MeunComponent } from './meun/meun.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    AboutusComponent,
    SubjectObserableComponent,
    MeunComponent,
    ReplaySubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

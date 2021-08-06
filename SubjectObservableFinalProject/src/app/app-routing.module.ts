import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SubjectComponent } from './subject/subject.component';


const routes: Routes = [
  { path: 'hello', component: HelloComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'subject', component: SubjectComponent },
  {path: '', redirectTo: 'hello', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

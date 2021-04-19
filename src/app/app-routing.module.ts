import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { JumpComponent } from './Jump/Jump.component';
import { ObservableexComponent } from './observableex/observableex.component';




const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'contact',component: ContactComponent},
  {path:'about',component: AboutComponent},
  {path:'jump',component: JumpComponent},
  {path:'observable',component: ObservableexComponent}

  ]; 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

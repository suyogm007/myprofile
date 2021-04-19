import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { JumpComponent } from './Jump/Jump.component';
import { ObservableexComponent } from './observableex/observableex.component';
import { Friend4ListComponent } from './friend4-list/friend4-list.component';
import { Friend10ListComponent } from './friend10-list/friend10-list.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { NumberssComponent } from './numberss/numberss.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    JumpComponent,
    ObservableexComponent,
    Friend4ListComponent,
    Friend10ListComponent,
    MyprofileComponent,
    NumberssComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

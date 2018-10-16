import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routes";
import {AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import { HomeComponent } from './home/home';
import { LoginComponent } from './login/login.component'; 
import { FormComponent } from './form/form.component';
// import { DatepickerModule } from 'angular2-material-datepicker';


// import { HomeComponent } from './home/home';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    // FormComponent,
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(rootRouterConfig),
    RouterModule.forRoot([
      { path: 'form', component: FormComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full'},
    ]) ],
  // entryComponents:[FormComponent, LoginComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

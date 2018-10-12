import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routes";
import {AppComponent} from "./app";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { DatepickerModule } from 'angular2-material-datepicker';
import { Home } from './home/home';
// import {LoginComponent} from './login/login.component'; 
import { FormComponent } from './form/form.component';
// import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [AppComponent, Home],
  // entryComponents: [FormComponent],
  imports     : [ BrowserModule, FormsModule, RouterModule.forRoot(rootRouterConfig), DatepickerModule ,
  RouterModule.forRoot([
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    // { path: 'form', component:FormComponent},
  ]) ],
  
  providers   : [{ provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap   : [AppComponent]
})
export class AppModule {

}
//, HttpModule, HttpClient
//   providers   : [{ provide: LocationStrategy, useClass: HashLocationStrategy}, AuthenticationService, AuthGuardService],






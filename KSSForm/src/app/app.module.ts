import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routes";
import {AppComponent} from "./app";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { DatepickerModule } from 'angular2-material-datepicker';
import { Home } from './home/home';
// import { HttpModule } from '@angular/http';
// import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [AppComponent, Home],
  imports     : [ BrowserModule, FormsModule, RouterModule.forRoot(rootRouterConfig), DatepickerModule ,
  RouterModule.forRoot([
    { path: '', redirectTo: 'login', pathMatch: 'full'},
  ]) ],
  
  providers   : [{ provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap   : [AppComponent],
  // entryComponents: [FormComponent]
})
export class AppModule {

}
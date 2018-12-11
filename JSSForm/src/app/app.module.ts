import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HistoricalComponent } from './history/History.component';
import { FormComponent } from './form/form.component';
import { ReviewComponent } from './review/review.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

export const routes : Routes = [
  { path: "", component: LoginComponent},
  { path: "login", component: LoginComponent},
  { path: "history", component: HistoricalComponent},
  { path: "form", component: FormComponent},
  { path: "review", component: ReviewComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HistoricalComponent,
    FormComponent,
    ReviewComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

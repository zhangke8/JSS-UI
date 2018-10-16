import { NgModule } from '@angular/core'; 
import { RouterModule } from '@angular/router'; 
import {  Routes } from '@angular/router';

import { HomeComponent } from './home/home';
import { LoginComponent } from './login/login.component'; 
import { FormComponent } from './form/form.component';

export const rootRouterConfig: 
Routes = [ 
{ path: 'home', component: HomeComponent }, 
{ path: 'login', component: LoginComponent }, 
{ path: 'form', component: FormComponent },
{ path: '', redirectTo: 'home', pathMatch: 'full' }
]; 
@NgModule({
    imports: [ RouterModule.forRoot(rootRouterConfig, { useHash: true}) ],
    declarations: [],
    // entryComponents: [LoginComponent],
    exports: [ RouterModule ],
    
}) 
  
export class AppRoutingModule { }
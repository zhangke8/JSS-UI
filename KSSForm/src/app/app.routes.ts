// import {Routes} from '@angular/router';
// import { Home } from './home/home';
// import { LoginComponent } from './login/login.component';
// import { Form } from './form/form.component';

// export const rootRouterConfig: Routes = [
//   {path: 'login', component: LoginComponent},
//   // {path: 'form', component: Form},
//   {path: '', redirectTo: 'home', terminal: true},
//   {path: 'home', component: Home},
  
// ];

import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router'; 

import {LoginComponent} from './login/login.component'; 
import { FormComponent } from './form/form.component';

export const rootRouterConfig: Routes = [ 
{ path: 'login', component: LoginComponent }, 
{ path: 'form', component: FormComponent },
{ path: '', redirectTo: 'home', pathMatch: 'full' }
]; 
@NgModule({ 
    imports: [ RouterModule.forRoot(rootRouterConfig, { useHash: true}) ], 
    exports: [ RouterModule ], declarations: [] 
}) 
  
export class AppRoutingModule { }

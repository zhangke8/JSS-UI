import {Routes} from '@angular/router';
import {Home} from './home/home';


export const rootRouterConfig: Routes = [
  {path: '', redirectTo: 'home', terminal: true},
  {path: 'home', component: Home},
];


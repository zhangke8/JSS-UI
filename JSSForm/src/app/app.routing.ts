import { Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';

export const routes : Routes = [
    { path: "", component: HomeComponent}
]
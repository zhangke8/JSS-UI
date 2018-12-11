import { Routes} from '@angular/router';

import { LoginComponent  } from './login/login.component';
import { HistoricalComponent } from './history/History.component';
import { FormComponent } from './form/form.component';
import { ReviewComponent } from './review/review.component';

export const routes : Routes = [
    { path: "", component: LoginComponent },
    { path: "/login", component: LoginComponent},
    { path: "/history", component: HistoricalComponent},
    { path: "/form", component: FormComponent},
    { path: "/review", component: ReviewComponent}
]
import { RouterModule, Routes } from '@angular/router';
import { DealDetailsComponent } from './components/deal-details/deal-details.component';
import { DealListComponent } from './components/deal-list/deal-list.component';


export const routes: Routes = [
  { path: '', component: DealListComponent },
  { path: 'deal-details/:id', component: DealDetailsComponent }
];

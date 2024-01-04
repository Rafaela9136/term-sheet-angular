import { RouterModule, Routes } from '@angular/router';
import { DealDetailsComponent } from './components/deal-details/deal-details.component';
import { DealModalComponent } from './components/deal-modal/deal-modal.component';
import { EditDealModalComponent } from './components/edit-deal-modal/edit-deal-modal.component';
import { DealListComponent } from './components/deal-list/deal-list.component';


export const routes: Routes = [
  { path: '', component: DealListComponent },
  { path: 'add-deals', component: DealModalComponent},
  { path: 'edit-deal/:id', component: EditDealModalComponent },
  { path: 'deal-details/:id', component: DealDetailsComponent }
];

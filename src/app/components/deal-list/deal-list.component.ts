import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';
import { DealComponent } from '../deal/deal.component';
import { DealModalComponent } from '../deal-modal/deal-modal.component';
import { EditDealModalComponent } from '../edit-deal-modal/edit-deal-modal.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { DealService } from "../../services/deal.service";
import { IDeal } from "../../interfaces/ideal";

@Component({
  selector: 'app-deal-list',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    NavbarComponent,
    DealComponent,
    DealModalComponent,
    EditDealModalComponent
  ],
  templateUrl: './deal-list.component.html',
  styleUrl: './deal-list.component.css'
})

export class DealListComponent {
  editedDeal: IDeal | undefined;

  constructor(
    private dealService: DealService,
    private router: Router
  ) {}

  get deals() {
    return this.dealService.getDeals();
  }

  addDeals() {
    console.log("add deals")
    this.router.navigate(['/add-deals']);
  }

  viewDeal(dealId: number) {
    console.log("view deal")
    this.router.navigate(['/deal-details', dealId]);
  }

  editDeal(dealId: number) {
    console.log("edit deals")
    this.router.navigate(['/edit-deal', dealId]);
  }

  selectDeal(deal: IDeal) {
    console.log(deal)
    this.editedDeal = { ...deal};
  }

  updateDeal(deal: IDeal) {
    this.dealService.updateDeal(deal);
  }

  removeDeal(deal: IDeal) {
    this.dealService.removeDeal(deal);
  }
}

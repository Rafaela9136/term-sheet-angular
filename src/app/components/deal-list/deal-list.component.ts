import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';
import { DealComponent } from '../deal/deal.component';
import { DealModalComponent } from '../deal-modal/deal-modal.component';
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
    DealModalComponent
  ],
  templateUrl: './deal-list.component.html',
  styleUrl: './deal-list.component.css'
})

export class DealListComponent {
  modalOpen = false;

  constructor(private DealService: DealService, private router: Router) {}

  get deals() {
    return this.DealService.getDeals();
  }

  openDealModal() {
    this.modalOpen = true;
  }

  addDeals(newDeals: IDeal[]) {
    this.DealService.addDeals(newDeals);
    this.modalOpen = false;
  }

  viewDeal(dealId: number) {
    console.log("view deal")
    this.router.navigate(['/deal-details', dealId]);
  }

  updateDeal(deal: IDeal) {
    this.DealService.updateDeal(deal);
  }

  removeDeal(deal: IDeal) {
    this.DealService.removeDeal(deal);
  }
}

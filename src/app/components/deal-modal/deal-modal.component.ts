import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { CommonModule } from '@angular/common';
import { DealService } from "../../services/deal.service";
import { IDeal } from "../../interfaces/ideal";

@Component({
  selector: 'app-deal-modal',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './deal-modal.component.html',
  styleUrl: './deal-modal.component.css'
})

export class DealModalComponent {
  newDeal: IDeal = {
    name: '',
    type: '',
    purchasePrice: 0,
    address: '',
    noi: 0,
    capRate: 0
  } 
  newDeals: IDeal[] = [];

  constructor(
    private dealService: DealService,
    private router: Router
  ) {
    this.newDeals.push(JSON.parse(JSON.stringify(this.newDeal)));
  }

  addDeal() {
    this.newDeals.push(JSON.parse(JSON.stringify(this.newDeal)));
  }

  updateCapRate(deal: IDeal) {
    if (deal.noi !== undefined && deal.purchasePrice !== undefined && deal.purchasePrice !== 0) {
      deal.capRate = deal.noi/deal.purchasePrice;
    } else {
      deal.capRate = 0;
    }
  }

  onSubmit() {  
    console.log(this.newDeals)
    this.dealService.addDeals(this.newDeals);
    this.newDeals = [this.newDeal];
    this.router.navigateByUrl('')
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
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
  ) {}

  addDeal() {
    this.newDeals.push(JSON.parse(JSON.stringify(this.newDeal)));
    this.newDeal = {
      name: '',
      type: '',
      purchasePrice: 0,
      address: '',
      noi: 0,
      capRate: 0
    } 
  }

  onSubmit() {  
    this.dealService.addDeals(this.newDeals);
    this.newDeals = [this.newDeal];
    this.router.navigateByUrl('')
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DealService } from "../../services/deal.service";
import { IDeal } from "../../interfaces/ideal";

@Component({
  selector: 'app-deal-modal',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
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
  newDeals: IDeal[] = [this.newDeal];

  constructor(private dealService: DealService) {}

  addDeal() {
    this.newDeals.push(this.newDeal);
  }

  onSubmit() {  
    this.addDeals.emit(this.newDeals);
    this.newDeals = [this.newDeal];
  }

  @Output() addDeals: EventEmitter<IDeal[]> = new EventEmitter<IDeal[]>();
}
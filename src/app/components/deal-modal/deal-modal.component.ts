import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
  newDeals: IDeal[] = [{
    id: 0,
    name: '',
    type: '',
    purchasePrice: 0,
    address: '',
    noi: 0,
    capRate: 0
  }];

  addDeal() {
    let index = this.newDeals.length
    this.newDeals.push({ 
      id: this.newDeals.length,
      name: '',
      type: '',
      purchasePrice: 0,
      address: '',
      noi: 0,
      capRate: 0
    });
  }

  onSubmit() {
    this.addDeals.emit(this.newDeals);
    this.newDeals = [{
      id: 0,
      name: '',
      type: '',
      purchasePrice: 0,
      address: '',
      noi: 0,
      capRate: 0
    }];
  }

  @Output() addDeals: EventEmitter<IDeal[]> = new EventEmitter<IDeal[]>();
}
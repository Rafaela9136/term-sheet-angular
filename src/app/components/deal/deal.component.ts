import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IDeal } from "../../interfaces/ideal";

@Component({
  selector: '[app-deal]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './deal.component.html',
  styleUrl: './deal.component.css'
})

export class DealComponent implements OnInit {
  @Input() deal: IDeal;

  constructor() {
    this.deal = {
      id: 0,
      name: "Deal 1",
      type: "Acquisition",
      purchasePrice: 350,
      address: "rua",
      noi: 12122,
      capRate: 12122
    };
  }

  ngOnInit() {
  }

  updateDeal() {
    this.update.emit(this.deal)
  }

  removeDeal() {
    this.remove.emit(this.deal)
  }

  viewDeal() {
    this.view.emit(this.deal)
  }
  
  @Output() remove: EventEmitter<IDeal> = new EventEmitter<IDeal>();
  @Output() update: EventEmitter<IDeal> = new EventEmitter<IDeal>();
  @Output() view: EventEmitter<IDeal> = new EventEmitter<IDeal>();
}

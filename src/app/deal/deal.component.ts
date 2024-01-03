import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IDeal } from "../interfaces/ideal";

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
      name: "Deal 1",
      type: "Acquisition",
      purchasePrice: 350,
      address: "rua",
      noi: 12122,
      capRate: 12122
    };
  }

  ngOnInit() {
    console.log(this)
  }
}

import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from "@angular/router";
import { DealService } from "../../services/deal.service";
import { IDeal } from "../../interfaces/ideal";

@Component({
  selector: 'app-edit-deal-modal',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './edit-deal-modal.component.html',
  styleUrl: './edit-deal-modal.component.css'
})

export class EditDealModalComponent implements OnInit {
  dealId: number = 0;
  deal: IDeal  = {};

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private dealService: DealService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.dealId = +params['id'];
      this.loadDealDetails();
    });
  }

  loadDealDetails() {
    this.deal = this.dealService.getDealById(this.dealId);
    console.log(this.deal)
  }

  onSubmit() {  
    this.dealService.updateDeal(this.deal);
    this.deal = {};
    this.router.navigate(['/']);
  }

  goBack() {
    this.router.navigate(['/']);
  }
}

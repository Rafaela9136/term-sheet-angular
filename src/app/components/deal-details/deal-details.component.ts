import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DealService } from "../../services/deal.service";
import { IDeal } from "../../interfaces/ideal";

@Component({
  selector: 'app-deal-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './deal-details.component.html',
  styleUrl: './deal-details.component.css'
})
export class DealDetailsComponent implements OnInit {
  dealId: number = 0;
  deal: IDeal | undefined;

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
  }

  goBack() {
    this.router.navigate(['/']);
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DealComponent } from './deal/deal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IDeal } from "./interfaces/ideal";
import { DealService } from "./services/deal.service";


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CommonModule, 
    RouterOutlet,
    NavbarComponent,
    DealComponent
  ],
})

export class AppComponent {
  public newDeal = {
    value: ''
  };

  constructor(private DealService: DealService) {}

  get deals() {
    return this.DealService.getDeals();;
  }
}

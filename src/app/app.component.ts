import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DealComponent } from './deal/deal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IDeal } from "./interfaces/ideal";


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

  allDeals: IDeal[] = [
    {
      name: "Deal 1",
      type: "Acquisition",
      purchasePrice: 350,
      address: "rua",
      noi: 12122,
      capRate: 12122
    },
    {
      name: "Deal 1",
      type: "Acquisition",
      purchasePrice: 350,
      address: "rua",
      noi: 12122,
      capRate: 12122
    },
    {
      name: "Deal 1",
      type: "Acquisition",
      purchasePrice: 350,
      address: "rua",
      noi: 12122,
      capRate: 12122
    }
  ];

  get deals() {
    console.log(this.allDeals)
    return this.allDeals;
  }
}

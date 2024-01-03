import { Injectable } from '@angular/core';
import { IDeal } from "../interfaces/ideal";

@Injectable({
  providedIn: 'root'
})
export class DealService {

  private dealsList: IDeal[] = [
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

  constructor() { }

  getDeals(): IDeal[] {
    return this.dealsList;
  }
}

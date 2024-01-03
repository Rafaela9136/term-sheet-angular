import { Injectable } from '@angular/core';
import { IDeal } from "../interfaces/ideal";

const defaultDealsList = [
  {
    id: 0,
    name: "Deal 1",
    type: "Acquisition",
    purchasePrice: 350,
    address: "rua",
    noi: 12122,
    capRate: 12122
  },
  {
    id: 1,
    name: "Deal 1",
    type: "Acquisition",
    purchasePrice: 350,
    address: "rua",
    noi: 12122,
    capRate: 12122
  },
  {
    id: 2,
    name: "Deal 1",
    type: "Acquisition",
    purchasePrice: 350,
    address: "rua",
    noi: 12122,
    capRate: 12122
  }
];

@Injectable({
  providedIn: 'root'
})

export class DealService {

  dealsList: IDeal[];

  constructor() {
    this.dealsList = defaultDealsList;
  }

  getDeals(): IDeal[] {
    return this.dealsList;
  }

  addDeals(deals: IDeal[]) { 
    this.dealsList.push(...deals);
  }

  updateDeal(deal: IDeal): void {
    const index = this.dealsList.indexOf(deal);
  }

  removeDeal(deal: IDeal) { 
    const index = this.dealsList.indexOf(deal);
    this.dealsList.splice(index, 1);
  }

  getDealById(dealId: number): IDeal | undefined {
    return this.dealsList.find((deal) => deal.id === dealId)
  }
}

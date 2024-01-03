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
    deals.forEach((deal, index) => {
      deal.id = this.getNextId(index);
    });

    console.log(this.dealsList)

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
    console.log(this.dealsList)
    return this.dealsList.find((deal) => deal.id === dealId)
  }

  private getNextId(index: number): number {
    return this.dealsList.length + index;
  }
}

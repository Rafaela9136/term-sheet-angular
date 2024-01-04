import { Injectable } from '@angular/core';
import { IDeal } from "../interfaces/ideal";

const defaultDealsList = [
  {
    id: 0,
    name: "Sunset Plaza Apartments",
    type: "Acquisition",
    purchasePrice: 750000,
    address: "123 Sunset Blvd",
    noi: 50000,
    capRate: 6.67
  },
  {
    id: 1,
    name: 'Tech Park Tower',
    type: 'Lease',
    purchasePrice: 1200000,
    address: '456 Tech Park Ave',
    noi: 90000,
    capRate: 5.5,
  },
  {
    name: 'Green Acres Warehouse',
    type: 'Lease',
    purchasePrice: 950000,
    address: '789 Green Acres Rd',
    noi: 60000,
    capRate: 7.2,
  },
  {
    name: 'Oceanfront Resort',
    type: 'Acquisition',
    purchasePrice: 2000000,
    address: '321 Oceanfront Dr',
    noi: 150000,
    capRate: 8.5,
  },
  {
    name: 'Downtown Loft Condos',
    type: 'Development',
    purchasePrice: 500000,
    address: '567 Main St',
    noi: 35000,
    capRate: 7.1,
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

    this.dealsList.push(...deals);
  }

  addNewDeal(deal: IDeal) {
    this.dealsList.push({ ...deal, id: this.dealsList.length + 1 });
  }

  updateDeal(deal: IDeal): void {
    const index = this.dealsList.indexOf(deal);
    console.log(index)
 
    if (index !== -1) {
      this.dealsList[index] = { ...deal };
    }
  }

  removeDeal(deal: IDeal) { 
    const index = this.dealsList.indexOf(deal);
    this.dealsList.splice(index, 1);
  }

  getDealById(dealId: number): IDeal {
    console.log(this.dealsList)
    return this.dealsList.find((deal) => deal.id === dealId) || {}
  }

  private getNextId(index: number): number {
    return this.dealsList.length + index;
  }
}

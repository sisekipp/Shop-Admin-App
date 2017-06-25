import { Component, OnInit } from '@angular/core';
import {Customer} from "../../model/customer.model";
import {CustomerService} from "../../services/customer.service";

@Component({
  selector: 'app-customer-overview',
  templateUrl: './customer-overview.component.html',
  styleUrls: ['./customer-overview.component.css']
})
export class CustomerOverviewComponent implements OnInit {

  private customers: Customer[];
  private filteredCustomers: Customer[];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customers = this.customerService.getCustomers();
    this.filteredCustomers = this.customers;
  }

  onSearchKeyUp(searchQuery: string): void {
      this.filteredCustomers = this.customers.filter(c => c.firstName.toLowerCase().includes(searchQuery) || c.lastName.toLowerCase().includes(searchQuery));
  }

}

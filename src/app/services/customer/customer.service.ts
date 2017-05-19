import {Customer} from "../../model/customer.model";

export class CustomerService {


  public getCustomers(): Customer[] {
    return [
      new Customer('Sebastian', 'Kipping'),
      new Customer('Katrin', 'Kipping'),
      new Customer('Phillipp', 'Kipping'),
      new Customer('Heike', 'Kipping'),
      new Customer('Jörg', 'Kipping'),
      new Customer('Rolf', 'Kipping'),
      new Customer('Margot', 'Kipping'),
      new Customer('Tanja', 'Traumwieser'),
      new Customer('Andi', 'Vogt'),
      new Customer('Thomas', 'Traumwieser'),
      new Customer('Carina', 'Jehle'),
      new Customer('Till', 'Jehle')
    ]
  }

}

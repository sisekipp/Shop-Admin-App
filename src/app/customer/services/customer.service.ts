import {Customer} from "../model/customer.model";

export class CustomerService {


  public getCustomers(): Customer[] {
    return [
      new Customer('Sebastian', 'Kipping','08.12.1983',null,'Am Bach 10','Kandern','79400'),
      new Customer('Katrin', 'Kipping','29.03.2982',null,'Am Bach 10','Kandern','79400'),
      new Customer('Phillipp', 'Kipping','20.07.2017',null,'Am Bach 10','Kandern','79400'),
      new Customer('Heike', 'Kipping','',null),
      new Customer('Jörg', 'Kipping','',null),
      new Customer('Rolf', 'Kipping','',null),
      new Customer('Margot', 'Kipping','',null),
      new Customer('Tanja', 'Traumwieser','',null),
      new Customer('Andi', 'Vogt','',null),
      new Customer('Thomas', 'Traumwieser','',null),
      new Customer('Carina', 'Jehle','',null),
      new Customer('Till', 'Jehle','',null)
    ]
  }

}

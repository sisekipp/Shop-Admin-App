
import {Order} from './order.model';

export class Customer {

  private _firstName: string;
  private _lastName: string;
  private _street: string;
  private _city: string;
  private _postcode: string;
  private _birthdate: string;
  private _orders: Order[];

  constructor(firstName: string, lastName: string, birthdate: string, orders: Order[] , street?: string, city?: string, postcode?: string) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._birthdate = birthdate;
    this._street = street;
    this._city = city;
    this._postcode = postcode;
    this._orders = orders;
  }


  get firstName(): string  {
    return this._firstName;
  }

  get lastName(): string  {
    return this._lastName;
  }

  get birthdate(): string {
    return this._birthdate;
  }

  get street(): string {
    return this._street;
  }

  get city(): string {
    return this._city;
  }

  get postcode(): string {
    return this._postcode;
  }

  get orders(): Order[] {
    return this._orders;
  }

  get orderCount(): number {
    if(!this._orders) {
      return 0;
    }

    return this._orders.length;
  }
}

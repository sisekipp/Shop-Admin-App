
export class Customer {

  private _firstName: string;
  private _lastName: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get firstName(): string  {
    return this._firstName;
  }

  get lastName(): string  {
    return this._lastName;
  }

}

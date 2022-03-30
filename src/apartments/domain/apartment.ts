import { UniqueId } from "src/shared/validations/uniqueId";
import { City } from "src/shared/validations/valueObject/city";
import { FlexibleLocation } from "src/shared/validations/valueObject/flexibleLocation";
import { PlainAddress } from "src/shared/validations/valueObject/plainAddress";
import { PositiveNumber } from "src/shared/validations/valueObject/positiveNumber";
import { Price } from "src/shared/validations/valueObject/price";

export class ApartmentDomain {
  readonly id: UniqueId;
  readonly area: PositiveNumber;
  readonly number_rooms: PositiveNumber;
  readonly price: Price;
  readonly address: PlainAddress;
  readonly location: FlexibleLocation;
  readonly city: City;
  readonly id_owner: UniqueId;

  constructor(
    id: UniqueId,
    area: PositiveNumber,
    number_rooms: PositiveNumber,
    price: Price,
    address: PlainAddress,
    location: FlexibleLocation,
    city: City,
    id_owner: UniqueId,
  ) {
    this.id = id;
    this.area = area;
    this.number_rooms = number_rooms;
    this.price = price;
    this.address = address;
    this.location = location;
    this.city = city;
    this.id_owner = id_owner;
  }
}
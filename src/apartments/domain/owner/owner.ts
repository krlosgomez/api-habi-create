import { UniqueId } from "src/shared/validations/uniqueId";
import { Email } from "src/shared/validations/valueObject/email";
import { FlexibleName } from "src/shared/validations/valueObject/flexibleName";
import { Phone } from "src/shared/validations/valueObject/phone";

export class OwnerDomain {
  readonly id: UniqueId;
  readonly name: FlexibleName;
  readonly email: Email;
  readonly phone: Phone;

  constructor(
    id: UniqueId,
    name: FlexibleName,
    email: Email,
    phone: Phone,
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
}
import ValidationException from "../validationError";
import { PhoneNumberUtil } from 'google-libphonenumber';
import { CountryCode } from "./countryCode";

export class Phone {

    readonly value: string;

    constructor(value: string, countryCode?: CountryCode) {
        this.ensureIsValid(value, countryCode);
        this.value = value;
    }

    private ensureIsValid(value: string, countryCode = new CountryCode('CO')): void {
        console.log('ensure: ')
        const phoneNumberUtil = PhoneNumberUtil.getInstance();
        const isValidPhone = phoneNumberUtil.isValidNumberForRegion(phoneNumberUtil.parse(value, countryCode.toString()), countryCode.toString());
        if (!value || !isValidPhone) {
            throw new ValidationException('El telefono es invalido.');
        }
    }

    toString(): string {
        return this.value;
    }
}
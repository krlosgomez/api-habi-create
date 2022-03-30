import ValidationException from "../validationError";


export class CountryCode {
    readonly value: string;

    constructor(value: string) {
        this.ensureIsValid(value);
        this.value = value;
    }

    private ensureIsValid(value: string): void {
        if (value.length < 2) {
            throw new ValidationException("El código del país es muy pequeño, deben ser 2 caracteres.");
        }

        if (value.length > 2) {
            throw new ValidationException("El código del país es muy grande, deben ser 2 caracteres.");
        }
    }

    toString(): string {
        return this.value;
    }
}